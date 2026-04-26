import Head from 'next/head'
import LeadForm from '../components/LeadForm'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}/?text=أود الاستفسار عن مشاريع سيتي إيدج`

function CtaRow() {
  return (
    <div className="cta-row">
      <a href={`tel:${PHONE}`} className="btn-call">📞 {PHONE}</a>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">💬 واتساب</a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>سيتي إيدج للتطوير العقاري - cityedge development</title>
        <meta name="description" content="امتلك وحدتك بأضخم مشاريع شركة سيتي إيدج للتطوير العقاري - العاصمة الإدارية، العلمين الجديدة، الشيخ زايد، التجمع الخامس" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img
            src="https://cityedgedevelopment.net/wp-content/uploads/2025/12/logo.png"
            alt="City Edge Logo"
            style={{ height: 50, objectFit: 'contain' }}
          />
          <ul className="navbar-links">
            <li><a href="#alamine">مدينة العلمين</a></li>
            <li><a href="#garden">جاردن سيتي</a></li>
            <li><a href="#maks">كمبوند المقصد</a></li>
            <li><a href="#etapa">كمبوند ETAPA</a></li>
            <li><a href="#maspero">أبراج ماسبيرو</a></li>
            <li><a href="#lush">Lush Valley</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          امتلك وحدتك بأضخم مشاريع شركة <span>سيتي إيدج</span> للتطوير العقاري
        </h1>
        <div className="hero-pills">
          {[
            ['أبراج ماسبيرو', '#maspero'],
            ['كمبوند ETAPA', '#etapa'],
            ['كمبوند المقصد', '#maks'],
            ['جاردن سيتي', '#garden'],
            ['مدينة العلمين', '#alamine'],
            ['Lush Valley', '#lush'],
          ].map(([label, href]) => (
            <a key={label} href={href} className="hero-pill">{label}</a>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-item"><h3>%1</h3><p>مقدمات تبدأ من</p></div>
          <div className="stat-item"><h3>15</h3><p>سنة أقساط</p></div>
          <div className="stat-item"><h3>90م²</h3><p>مساحات تبدأ من</p></div>
          <div className="stat-item"><h3>فوري</h3><p>استلام متاح</p></div>
        </div>
      </div>

      {/* GARDEN CITY */}
      <section className="section" id="garden">
        <div className="section-inner">
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-11.43.01-PM1.jpeg"
              alt="كمبوند جاردن سيتي العاصمة الإدارية الجديدة"
            />
            <div className="project-card-body">
              <h2>كمبوند جاردن سيتي العاصمة الإدارية الجديدة</h2>
              <p>
                New Garden City New Capital، من المشروعات الفريدة التي تعلن عنها شركة سيتي إيدج للتطوير العقاري،
                ومن المقرر أن يتضمن المشروع مجموعة فاخرة من الشقق والفلل، والتي تتمتع بكل مقومات الحياة الحديثة
                حيث تضمن الراحة والخصوصية الكاملة لجميع السكان.
              </p>
              <h3 style={{ marginBottom: 10, color: '#c9a84c' }}>مساحة الوحدات</h3>
              <ul className="highlight-list">
                <li>شقق غرفة واحدة: من 80 إلى 140 م²</li>
                <li>شقق غرفتين: من 125 إلى 180 م²</li>
                <li>شقق 3 غرف: من 200 إلى 355 م²</li>
                <li>مقدم 5% ثم 5% بعد 3 شهور — تقسيط حتى 10 سنوات</li>
                <li>تسليم الوحدات خلال 3 سنوات</li>
              </ul>
              <h3 style={{ marginBottom: 10, color: '#c9a84c' }}>الموقع</h3>
              <ul className="highlight-list">
                <li>الحي السكني الخامس R5 بالعاصمة الإدارية</li>
                <li>قريب من مسجد مصر والبرج الأيقوني</li>
                <li>يبعد دقائق عن الحي الحكومي وحي السفارات</li>
                <li>قريب من محور بن زايد والنهر الأخضر ومحطة المونوريل</li>
              </ul>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-garden" />

      {/* LUSH VALLEY */}
      <section className="section section-bg" id="lush">
        <div className="section-inner">
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2026/01/Lush-Valley.webp"
              alt="Lush Valley New Cairo"
            />
            <div className="project-card-body">
              <h2>Lush Valley New Cairo — أحدث مشاريع التجمع الخامس</h2>
              <p>
                تُعلن شركة سيتي إيدج للتطوير العقاري عن إطلاق أحدث مشروعاتها السكنية في قلب شرق القاهرة،
                وهو كمبوند لاش فالي التجمع الخامس، أحد المشاريع السكنية المميزة التي تجمع بين العيش الراقي
                والاستثمار الذكي في آنٍ واحد.
              </p>
              <ul className="highlight-list">
                <li>شقة غرفتين بسعر يبدأ من 9,500,000 جنيه</li>
                <li>تقسيط حتى 8 سنوات</li>
                <li>مقدم يبدأ من 5% فقط</li>
                <li>خصم يصل إلى 35% عند التقسيط على 3 سنوات</li>
              </ul>
              <h3 style={{ marginBottom: 10, color: '#c9a84c' }}>الموقع</h3>
              <ul className="highlight-list">
                <li>منطقة اللوتس بالتجمع الخامس</li>
                <li>قريب من الجامعة الأمريكية وشارع التسعين</li>
                <li>على مقربة من الرحاب ومدينتي ونادي وادي دجلة</li>
              </ul>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-lush" />

      {/* NEW ALAMEIN */}
      <section className="section" id="alamine">
        <div className="section-inner">
          <h2 className="section-title">أبراج العلمين الجديدة</h2>
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2024/08/460b1666979917.5b2996daefd3b.png"
              alt="أبراج العلمين الجديدة"
            />
            <div className="project-card-body">
              <p>
                مشروع كبير يتمتع بإطلالة رائعة على البحر المتوسط ومقام في موقع مميز للغاية في الساحل الشمالي المصري.
                تمتد على الممشى السياحي الذي يصل طوله إلى 14 كيلومتر.
              </p>
              <h3 style={{ marginBottom: 10, color: '#c9a84c' }}>خدمات ومميزات الأبراج</h3>
              <div className="services-grid">
                {[
                  'حمامات سباحة', 'حدائق ومتنزهات', 'صالات رياضية', 'دار الأوبرا والمتاحف',
                  'مساحات خضراء', 'مركز طبي ضخم', 'حي الفنادق', 'مركز سياحي عالمي',
                  'جراجات للسيارات', 'خدمات تعليمية', 'مساجد وكنائس', 'مركز مؤتمرات',
                ].map((s) => (
                  <div key={s} className="service-item">{s}</div>
                ))}
              </div>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-alamine" />

      {/* JADE PARK */}
      <section className="section section-bg" id="jade">
        <div className="section-inner">
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2025/12/1-1024x576-1.webp"
              alt="كمبوند Jade Park العاصمة الإدارية"
            />
            <div className="project-card-body">
              <h2>كمبوند Jade Park — العاصمة الإدارية الجديدة</h2>
              <p>
                جيد بارك العاصمة الادارية الجديدة أحدث انطلاقات سيتي إيدج بالحي السكني الثالث، يتميز بإطلالة مباشرة
                على البرج الأيقوني ويضم شقق ودوبلكس بمساحات متفاوتة وأسعار تنافسية.
              </p>
              <ul className="highlight-list">
                <li>الحي السكني الثالث R3 بالعاصمة الإدارية</li>
                <li>إطلالة مباشرة على البرج الأيقوني</li>
                <li>دقائق من محور محمد بن زايد الشمالي وطريق السويس</li>
                <li>قريب من النهر الأخضر والمدينة الرياضية</li>
              </ul>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-jade" />

      {/* AL MAQSAD */}
      <section className="section" id="maks">
        <div className="section-inner">
          <h2 className="section-title">كمبوند المقصد — العاصمة الإدارية</h2>
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2024/08/maqsad_0006_Layer-1-1024x666.jpg"
              alt="كمبوند المقصد"
            />
            <div className="project-card-body">
              <p>
                يمتاز بالتصميمات العصرية ذات الرقي والأصالة، بالحي الثالث بالعاصمة الإدارية،
                قريب من الحي الدبلوماسي والحكومي وحي المال والأعمال، ومطار العاصمة الدولي.
              </p>
              <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: 20 }}>
                {[
                  'https://cityedgedevelopment.net/wp-content/uploads/2024/08/maqsad_0004_Selective-Color-1-1024x666.jpg',
                  'https://cityedgedevelopment.net/wp-content/uploads/2024/08/maqsad_0001_Layer-6-1024x666.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt="المقصد" />
                ))}
              </div>
              <h3 style={{ marginBottom: 10, color: '#c9a84c' }}>المرافق والخدمات</h3>
              <div className="services-grid">
                {[
                  'حمامات سباحة', 'جراجات مؤمنة', 'كلوب هاوس', 'صيدلية',
                  'فريق أمن وحراسة', 'نادي رياضي', 'منطقة ترفيهية للأطفال', 'نادي صحي وجيم وسبا',
                  'منطقة تجارية', 'مطاعم وكافيهات',
                ].map((s) => (
                  <div key={s} className="service-item">{s}</div>
                ))}
              </div>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-maks" />

      {/* ETAPA */}
      <section className="section section-bg" id="etapa">
        <div className="section-inner">
          <h2 className="section-title">كمبوند ETAPA — الشيخ زايد</h2>
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2024/08/image_5.jpg"
              alt="كمبوند ETAPA"
            />
            <div className="project-card-body">
              <p>
                يقع Etapa في مدينة الشيخ زايد بمحافظة الجيزة، ويجمع بين الطبيعة والحياة العصرية في بيئة متناغمة.
                يقع على هضبة الشيخ زايد ويوفر إطلالات رائعة، ويضم Etapa Square الذي يشمل منطقة أعمال ومول
                تجاري ومركز طبي.
              </p>
              <div className="gallery-grid">
                {[
                  'https://cityedgedevelopment.net/wp-content/uploads/2024/08/image_1.jpg',
                  'https://cityedgedevelopment.net/wp-content/uploads/2024/08/image_3.jpg',
                  'https://cityedgedevelopment.net/wp-content/uploads/2024/08/image_4.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt="ETAPA" />
                ))}
              </div>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-etapa" />

      {/* MASPERO */}
      <section className="section" id="maspero">
        <div className="section-inner">
          <h2 className="section-title">أبراج ماسبيرو — قلب القاهرة</h2>
          <div className="project-card">
            <img
              src="https://cityedgedevelopment.net/wp-content/uploads/2024/08/image21c1a755-e19b-4fbb-9061-abc5debe87b0.jpg"
              alt="أبراج ماسبيرو"
            />
            <div className="project-card-body">
              <p>
                يقع مشروع أبراج ماسبيرو في قلب القاهرة، ممتداً على مساحة 77 فداناً بإطلالة خلابة على نهر النيل.
                يسعى المشروع ليكون مركزاً متكاملاً للأعمال والتجارة والسكن في وسط العاصمة.
              </p>
              <ul className="highlight-list">
                <li>أبراج ماسبيرو التجارية — 120 مكتباً بأحدث التقنيات</li>
                <li>ماسبيرو نايل هايتس — 134 مكتباً على 24 طابقاً</li>
                <li>مول تجاري فاخر بإطلالة على النيل</li>
                <li>موقع استراتيجي يسهل الوصول عبر الطرق الرئيسية</li>
              </ul>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>

      <LeadForm sectionId="contact-maspero" />

      {/* INSTANT DELIVERY */}
      <section className="section section-bg">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            وحدات استلام فوري بالعاصمة الإدارية ومدينة العلمين
          </h2>
          <div className="gallery-grid">
            {[
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/1.jpg',
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/2-1.jpg',
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/3.jpg',
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/4.jpg',
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/5.jpg',
              'https://cityedgedevelopment.net/wp-content/uploads/2024/08/6.jpg',
            ].map((src, i) => (
              <img key={i} src={src} alt={`وحدة ${i + 1}`} />
            ))}
          </div>
          <div className="stats-bar" style={{ margin: '40px -20px -80px', borderRadius: 0 }}>
            <div className="stats-bar-inner">
              <div className="stat-item"><h3>شقق وفيلات</h3><p>استلام فوري</p></div>
              <div className="stat-item"><h3>90م²</h3><p>مساحات تبدأ من</p></div>
              <div className="stat-item"><h3>15 سنة</h3><p>أقساط مريحة</p></div>
              <div className="stat-item"><h3>%1</h3><p>مقدمات تبدأ من</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL FORM */}
      <LeadForm sectionId="final-contact" />

      {/* FOOTER */}
      <footer className="footer">
        <img
          src="https://cityedgedevelopment.net/wp-content/uploads/2024/08/logo-png.png"
          alt="City Edge"
        />
        <a href={`tel:${PHONE}`}>{PHONE}</a>
        <p>All Rights Reserved © City Edge Developments Egypt</p>
      </footer>

      {/* STICKY CTA */}
      <div className="sticky-cta">
        <a href={`tel:${PHONE}`}>📞 اتصل بنا</a>
        <a href={WA_LINK} target="_blank" rel="noreferrer">💬 واتساب</a>
      </div>
    </>
  )
}
