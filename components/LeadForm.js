import { useState } from 'react'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=أود الاستفسار عن مشاريع سيتي إيدج`
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/nada.abdelrahman@grandeur-spaces.com'

const projects = [
  'Lush Valley - التجمع الخامس',
  'أبراج العلمين الجديدة',
  'Jade Park - العاصمة الإدارية',
  'Latin City - العلمين الجديدة',
  'Downtown - العلمين الجديدة',
  'كمبوند المقصد - العاصمة الإدارية',
  'Garden City - العاصمة الإدارية',
  'كمبوند ETAPA - الشيخ زايد',
  'أبراج ماسبيرو - القاهرة',
  'Zahya - المنصورة الجديدة',
]

export default function LeadForm({ sectionId }) {
  const [form, setForm] = useState({ name: '', phone: '', project: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          project: form.project || 'لم يحدد',
          _subject: `ليد جديد - سيتي إيدج | ${form.name} - ${form.phone}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await res.json()

      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        setForm({ name: '', phone: '', project: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="form-section" id={sectionId || 'contact'}>
      <h2 className="section-title" style={{ textAlign: 'center', color: '#fff' }}>
        تسجيل البيانات
      </h2>

      <div className="lead-form">
        {status === 'success' ? (
          <div className="form-success">
            تم استلام بياناتك بنجاح!
            <br />
            <span style={{ fontSize: 14, color: '#aaa', fontWeight: 400 }}>
              سيتواصل معك فريق المبيعات قريباً
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>الاسم الكامل *</label>
              <input
                type="text"
                name="name"
                placeholder="اكتب اسمك هنا"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>رقم الهاتف *</label>
              <input
                type="tel"
                name="phone"
                placeholder="01xxxxxxxxx"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>المشروع المهتم به</label>
              <select name="project" value={form.project} onChange={handleChange}>
                <option value="">اختر المشروع</option>
                {projects.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'جاري الإرسال...' : 'تسجيل'}
            </button>
            {status === 'error' && (
              <p className="form-error">
                حدث خطأ، يرجى المحاولة مرة أخرى أو اتصل بنا مباشرة
              </p>
            )}
          </form>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: 30, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={`tel:${PHONE}`} className="btn-call">اتصل بنا: {PHONE}</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">واتساب</a>
      </div>
    </section>
  )
}
