// ✅ Uses Web3Forms — reliable, no activation needed
const WEB3FORMS_KEY = '968c2808-d4bd-482c-a72e-6489a307d7d7'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, project } = req.body

  if (!name || !phone) {
    return res.status(400).json({ message: 'الاسم ورقم الهاتف مطلوبان' })
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `ليد جديد - سيتي إيدج | ${name} - ${phone}`,
        from_name: 'سيتي إيدج - موقع العقارات',
        name,
        phone,
        project: project || 'لم يحدد',
      }),
    })

    const data = await response.json()
    console.log('Web3Forms response:', data)

    if (data.success) {
      return res.status(200).json({ message: 'تم إرسال بياناتك بنجاح' })
    } else {
      console.error('Web3Forms error:', data)
      return res.status(500).json({ message: 'حدث خطأ: ' + (data.message || 'unknown') })
    }
  } catch (error) {
    console.error('Contact API error:', error.message)
    return res.status(500).json({ message: 'حدث خطأ في الإرسال، حاول مرة أخرى' })
  }
}
