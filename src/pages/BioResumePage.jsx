import React from 'react';

export default function BioResumePage({ setActiveTab, onOpenLightbox }) {
  return (
    <div className="bio-resume-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="editorial-header">
            <h1>Biography</h1>
            <div className="thin-rule"></div>
          </div>

          {/* Bio Layout */}
          <div className="bio-grid" style={{ margin: '3rem 0' }}>
            <div>
              <div className="analog-frame">
                <img src="./photos/Biography pag.JPEG" alt="Anastasia Hoshaw" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)' }} />
              </div>
            </div>

            <div style={{ fontSize: '1.08rem', lineHeight: '1.9', color: 'var(--text-primary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Anastasia Hoshaw is an active performer, church musician, and teacher originally from rural southern Illinois. Since the age of twelve, she has accompanied anywhere from one to seven church services per week on a pipe organ. She earned a bachelor's degree in Organ Performance from the University of Illinois, where she studied under Dana Robinson. While at the University of Illinois, she studied conducting under Andy Bruhn and Andrew Major and piano pedagogy under Christos Tsitsaros. Additionally, she appeared with the University Chorus, the Women’s Glee Club, and the Oratorio Society. She gained organ building experience as a summer intern with Buzard Pipe Organ Builders of Champaign, IL.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Anastasia is currently a second-year organ student in the Master of Sacred Music program at the University of Notre Dame. There, Anastasia studies organ with Kola Owolabi while serving as a graduate assistant organist at the Basilica of the Sacred Heart. Her assignment at the Basilica involves working with the Magnificat Choir, the undergraduate women's liturgical choir. She teaches beginning organ lessons to several promising young musicians. She has experience as a Lutheran church musician at University Lutheran Church in Champaign, IL, and Emmaus Lutheran Church in South Bend, IN.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Anastasia is a member of the Southern Illinois Chapter of the American Guild of Organists, serving on their scholarship committee which generously supports young organists in the chapter area. She is a Biggs Scholar with the Organ Historical Society, with an upcoming performance at their 2026 convention in Philadelphia. Outside of her musical endeavours, Anastasia enjoys spending time with her husband, Bennett, reading good books, and working on a variety of knitting and embroidery projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
