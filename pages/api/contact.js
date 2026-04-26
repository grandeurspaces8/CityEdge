// ✅ Uses FormSubmit.co via JSON
// IMPORTANT: First time only — FormSubmit will send a confirmation email
// to nada.abdelrahman@grandeur-spaces.com → click "Confirm" once → done forever.

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
    const payload = {
      name,
      phone,
      project: project || 'لم يحدد',
      _subject: `ليد جديد - سيتي إيدج | ${name} - ${phone}`,
      _template: 'table',
      _captcha: 'false',
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    const text = await response.text()
    console.log('FormSubmit raw response:', text)

    let data
    try {
      data = JSON.parse(text)
    } catch {
      // FormSubmit sometimes returns non-JSON on first activation
      // treat any 200 response as success
      if (response.ok) {
        return res.status(200).json({ message: 'تم إرسال بياناتك بنجاح' })
      }
      throw new Error('Non-JSON response: ' + text)
    }

    if (
      data.success === 'true' ||
      data.success === true ||
      response.ok
    ) {
      return res.status(200).json({ message: 'تم إرسال بياناتك بنجاح' })
    } else {
      console.error('FormSubmit error response:', data)
      return res.status(500).json({ message: 'حدث خطأ: ' + (data.message || 'unknown') })
    }
  } catch (error) {
    console.error('Contact API error:', error.message)
    return res.status(500).json({ message: 'حدث خطأ في الإرسال، حاول مرة أخرى' })
  }
}
