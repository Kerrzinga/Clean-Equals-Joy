import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormState {
  name: string;
  phone: string;
  suburb: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  phone: '',
  suburb: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);

      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section className="page-enter py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Ready for a Joyful Clean?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get in touch today for a free quote. We serve residential and commercial
              properties throughout the Northern suburbs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl text-cyan-600 mr-4 mt-1">✆</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Phone</h4>
                  <p className="text-slate-600 text-xl font-semibold mt-1">022-404-5867</p>
                  <p className="text-sm text-slate-500 mt-1">Call or Text anytime</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl text-cyan-600 mr-4 mt-1">✉</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Email</h4>
                  <p className="text-slate-600 mt-1">hello@cleanequalsjoy.co.nz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl text-cyan-600 mr-4 mt-1">📍</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Primary Area</h4>
                  <p className="text-slate-600 mt-1">Whangaparāoa &amp; North Auckland</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-cyan-50 rounded-xl border border-cyan-100">
              <h4 className="font-bold text-cyan-800 mb-2">⭐ Your Satisfaction Matters</h4>
              <p className="text-cyan-700 text-sm">
                We take pride in our work. If something isn't quite right, we'll return to fix
                it immediately at no extra cost.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-slate-700 mb-1"
                  htmlFor="suburb"
                >
                  Suburb
                </label>
                <input
                  type="text"
                  id="suburb"
                  value={form.suburb}
                  onChange={handleChange}
                  placeholder="e.g. Whangaparāoa, Albany"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-slate-700 mb-1"
                  htmlFor="message"
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about the space (e.g., number of rooms) and preferred frequency..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-4 rounded-md transition shadow-md disabled:opacity-75"
              >
                {submitting ? 'Sending...' : submitted ? 'Sent Successfully' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-emerald-600 mt-4 text-center font-medium">
                  ✅ Sent! We will contact you at 022-404-5867 shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
