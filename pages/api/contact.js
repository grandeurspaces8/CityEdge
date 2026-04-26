// ✅ Uses FormSubmit.co — no SMTP config needed
// First submission will send a confirmation email to nada.abdelrahman@grandeur-spaces.com
// Just click "Confirm" in that email, then all leads will arrive automatically.

const FORMSUBMIT_EMAIL = 'nada.abdelrahman@grandeur-spaces.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, project } = req.body

  if (!name || !phone) {
    return res.status(400).json({ message: 'الاسم ورقم الهاتف مطلوبان' })
  }

  try {
    const formData = new URLSearchParams()
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('project', project || 'لم يحدد')
    formData.append('_subject', `🏢 ليد جديد - سيتي إيدج | ${name} - ${phone}`)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    formData.append('_replyto', 'no-reply@cityedge.com')

    const response = await fetch(
      `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: formData.toString(),
      }
    )

    const data = await response.json()

    if (data.success === 'true' || data.success === true) {
      return res.status(200).json({ message: 'تم إرسال بياناتك بنجاح' })
    } else {
      console.error('FormSubmit error:', data)
      return res.status(500).json({ message: 'حدث خطأ في الإرسال' })
    }
  } catch (error) {
    console.error('Fetch error:', error)
    return res.status(500).json({ message: 'حدث خطأ في الإرسال' })
  }
}
