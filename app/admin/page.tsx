"use client"

import { useState, useEffect } from 'react'

interface FormData {
  _id: string
  name: string
  email: string
  phone: string
  country: string
  target: string
  createdAt: string
}

export default function AdminPage() {
  const [forms, setForms] = useState<FormData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchForms()
  }, [])

  const fetchForms = async () => {
    try {
      const response = await fetch('/api/submit-form')
      if (response.ok) {
        const data = await response.json()
        setForms(data.forms)
      } else {
        setError('Failed to fetch forms')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading forms...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchForms}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Form Submissions</h1>
          <p className="text-gray-600">Total submissions: {forms.length}</p>
        </div>

        <div className="grid gap-6">
          {forms.map((form) => (
            <div key={form._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.name}</h3>
                  <p className="text-gray-600 mb-1"><strong>Email:</strong> {form.email}</p>
                  <p className="text-gray-600 mb-1"><strong>Phone:</strong> {form.phone}</p>
                  <p className="text-gray-600 mb-1"><strong>Country:</strong> {form.country}</p>
                  <p className="text-gray-600 mb-1"><strong>Target:</strong> {form.target}</p>
                  <p className="text-gray-600 mb-1"><strong>Submitted:</strong> {new Date(form.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {forms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No form submissions yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
