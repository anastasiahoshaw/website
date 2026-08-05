import React from 'react';
import { ExternalLink, Music } from 'lucide-react';

export default function RecordingsPage() {
  const fullRepertoire = [
    {
      composer: "J. S. Bach",
      works: [
        "Trio Sonata No. 4 in e minor, BWV 528",
        "Prelude and Fugue in C Major, BWV 545",
        "Pièce d’Orgue, BWV 572",
        "Nun komm, der Heiden Heiland, BWV 599",
        "In dulci jubilo, BWV 608",
        "Jesu, meine Freude, BWV 610",
        "Das alte Jahr vergangen ist, BWV 614",
        "In dir ist Freude, BWV 615",
        "Wir danken dir, BWV 623",
        "Christ lag in Todesbanden, BWV 625",
        "Komm Gott Schöpfer, Heiliger Geist, BWV 631",
        "Liebster Jesu, wir sind hier, BWV 633",
        "Ich ruf zu dir, Herr Jesu Christ, BWV 639",
        "Wenn wir in höchsten Nöten sein, BWV 641",
        "Alle Menschen müssen sterben, BWV 643",
        "Wachet auf, ruft uns die Stimme, BWV 645",
        "Kommst du nun, Jesu, vom Himmel herunter, BWV 650",
        "An Wasserflüssen Babylon, BWV 653",
        "Schmücke dich, BWV 654",
        "O Lamm Gottes, BWV 656",
        "Nun komm, der Heiden Heiland, BWV 659 & 660"
      ]
    },
    {
      composer: "Dietrich Buxtehude",
      works: [
        "Prelude, Fugue, and Chaconne in C Major, BuxWV 137",
        "Praeludium in a minor, BuxWV 153",
        "Erhalt uns, Herr, BuxWV 185",
        "Nun bitten wir den heiligen Geist, BuxWV 208",
        "Nun komm, der Heiden Heiland, BuxWV 211"
      ]
    },
    {
      composer: "Johannes Brahms",
      works: [
        "Psalm 13, Op. 27",
        "Schmücke dich, o liebe Seele, Op. 122, No. 5",
        "Es ist ein Ros’ entsprungen, Op. 122, No. 8",
        "Herzlich tut mich verlangen, Op. 122, No. 10"
      ]
    },
    {
      composer: "Felix Mendelssohn",
      works: [
        "Sonata in d minor, Op. 65, No. 6",
        "Laudate Pueri, Op. 39, No. 2"
      ]
    },
    {
      composer: "Joseph Haydn",
      works: [
        "Mass No. 1 in F Major",
        "Mass No. 6 in G Major",
        "Mass No. 7 in B-flat Major"
      ]
    },
    {
      composer: "Jehan Alain",
      works: [
        "Litanies, JA 119"
      ]
    },
    {
      composer: "Louis-Nicolas Clérambault",
      works: [
        "Suite du deuxième ton"
      ]
    },
    {
      composer: "François Couperin",
      works: [
        "Messe pour les couvents"
      ]
    },
    {
      composer: "César Franck",
      works: [
        "Prélude, Fugue et Variation, Op. 18"
      ]
    },
    {
      composer: "Herbert Howells",
      works: [
        "O, pray for the peace of Jerusalem"
      ]
    },
    {
      composer: "Sigfrid Karg-Elert",
      works: [
        "Nun danket alle Gott, Op. 65, No. 13"
      ]
    },
    {
      composer: "Paolo Quagliati",
      works: [
        "Canzonas III & XV from Recercate et Canzone (1601)"
      ]
    },
    {
      composer: "Josef Rheinberger",
      works: [
        "Sonata in a minor, Op. 98, No. 4"
      ]
    },
    {
      composer: "August Ritter",
      works: [
        "Sonata No. 2 in e minor"
      ]
    },
    {
      composer: "Jiří Ropek",
      works: [
        "Variations on Victimae Paschali laudes"
      ]
    },
    {
      composer: "Heinrich Scheidemann",
      works: [
        "Praeambulum in G Major, WV 73"
      ]
    },
    {
      composer: "Samuel Scheidt",
      works: [
        "Magnificat noni toni, SSWV 148"
      ]
    },
    {
      composer: "Franz Tunder",
      works: [
        "Christ lag in Todesbanden"
      ]
    },
    {
      composer: "Louis Vierne",
      works: [
        "Vingt-Quatre Pièces en style libre: Prélude and Lied"
      ]
    }
  ];

  return (
    <div className="recordings-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="editorial-header">
            <h1>Recordings & Repertoire</h1>
            <div className="thin-rule"></div>
          </div>

          {/* YouTube Links & Embedded Featured Playlist */}
          <div className="analog-list-item" style={{ margin: '2.5rem 0', padding: '2.5rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Recent recordings can be found on Anastasia's YouTube channel:
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a 
                href="https://www.youtube.com/@AnastasiaCurtisOrgan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-analog-primary"
              >
                Visit YouTube Channel <ExternalLink size={16} />
              </a>

              <a 
                href="https://www.youtube.com/watch?v=2o4sEI8-NqI&list=PLH9omMbFoAre85isW_4D5bWj8fdOvV3j7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-analog-outline"
              >
                Anastasia in Recital Playlist <ExternalLink size={16} />
              </a>
            </div>

            {/* Embedded Featured Playlist Video Player */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', aspectRatio: '16/9' }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/2o4sEI8-NqI?list=PLH9omMbFoAre85isW_4D5bWj8fdOvV3j7" 
                title="Anastasia in Recital" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Repertoire List */}
          <div style={{ margin: '4rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center', marginBottom: '1rem' }}>
              <Music size={24} style={{ color: 'var(--accent-gold)' }} />
              <h2 style={{ fontSize: '1.8rem', textAlign: 'center', margin: 0 }}>Repertoire List</h2>
            </div>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Updated Spring 2026
            </p>
            <div className="thin-rule" style={{ marginBottom: '2.5rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {fullRepertoire.map((section, idx) => (
                <div key={idx} className="analog-list-item" style={{ padding: '1.8rem' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--accent-gold)', marginBottom: '0.8rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                    {section.composer}
                  </h3>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.75' }}>
                    {section.works.map((work, workIdx) => (
                      <li key={workIdx} style={{ marginBottom: '0.45rem' }}>{work}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
