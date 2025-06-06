import Image from 'next/image'

const values = [
  {
    title: 'Quality Assurance',
    description: 'We maintain the highest standards in medical supplies, ensuring every product meets rigorous quality checks.',
    icon: '🔍'
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our priority. We provide personalized solutions and exceptional support.',
    icon: '🤝'
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our product range and services to meet modern healthcare needs.',
    icon: '💡'
  },
  {
    title: 'Reliability',
    description: 'Count on us for consistent, timely delivery and dependable service.',
    icon: '⏰'
  }
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About MedSupply</h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in medical supplies since 2010, serving healthcare professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, MedSupply began with a simple mission: to provide healthcare professionals with reliable, high-quality medical supplies. What started as a small distribution center has grown into a global leader in medical supply solutions.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of healthcare facilities, pharmacies, and medical professionals across the globe, maintaining our commitment to quality and service excellence.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200" />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 