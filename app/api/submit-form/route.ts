import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import FormData from '@/models/FormData'
import { sendFormSubmissionEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB()

    // Parse the request body
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'country', 'target']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Create new form data entry
    const formData = new FormData({
      name: body.name,
      email: body.email,
      phone: body.phone,
      country: body.country,
      target: body.target
    })

    // Save to database
    await formData.save()

    // Send emails
    const emailResult = await sendFormSubmissionEmail({
      name: body.name,
      email: body.email,
      phone: body.phone,
      country: body.country,
      target: body.target
    })

    // Return success response
    return NextResponse.json(
      { 
        message: 'Form submitted successfully!',
        id: formData._id,
        emailSent: emailResult.success
      },
      { status: 201 }
    )

  } catch (error: any) {
    console.error('Error submitting form:', error)
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    // Handle duplicate email errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    
    const forms = await FormData.find().sort({ createdAt: -1 }).limit(10)
    
    return NextResponse.json({ forms }, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching forms:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
