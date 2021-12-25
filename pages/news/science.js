import React from 'react'
import scienceStyles from '../../styles/Science_news.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function science() {
    return (
        <div className={scienceStyles.wrapper}>
            <div className={scienceStyles.container}>
                <div className={scienceStyles.title_container}>
                    <div className={scienceStyles.title}>Adrian Frutiger - Typefaces.</div>
                    <div className={scienceStyles.image_container}>
                        <Image 
                            src='/images/frutiger.jpeg'
                            className={scienceStyles.image}
                            layout='fill'
                            objectFit="cover" 
                            >
                            
                        </Image>
                    </div>
                    <div className={scienceStyles.paragraph_container}>
                        <div className={scienceStyles.paragraph}>
                        <p >Adrian Frutiger is a renowned twentieth century Swiss graphic designer. His forte was typeface designing and he is considered responsible for the advancement of typography into digital typography. His valued contribution to typography includes the typefaces; Univers and Frutiger.
                        </p>
                        <p>
                        Adrian Frutiger was born on May 24, 1928, in Unterseen, Canton of Bern to weaver parents. At the very young age, he began experimenting with stylized handwriting and invented scripts, defying the formal, cursive penmanship then taught at Swiss schools. His interest in sculpturing was not met with very encouraging views by his father and teachers. However, they supported the idea of him going into print. 
                        </p>
                        <div className={scienceStyles.image_container_small}>
                        <Image 
                            src='/images/frutiger4.png'
                            className={scienceStyles.image}
                            layout='fill'
                            objectFit="cover" 
                            >
                        </Image>
                        </div>

                        <p>Consequently, he entered the world of print yet kept his love for sculpturing alive by incorporating the sculpture designs in his typefaces. He began his apprenticeship, at the age of sixteen, as a compositor to the printer Otto Schaerffli, for four years. He also attended school of applied arts, Kunstgewerbeschule in Zürich. Here he thrived under the supervision of art instructors like Walter Käch and Alfred Willimann. Frutiger studied monumental inscriptions from Roman forum rubbings, although he primarily focused on calligraphy rather than drafting tools.
                        </p>
                        <p>
                        Frutiger illustrated the essay, Schrift / Écriture / Lettering: the development of European letter types carved in wood, which earned him a job offer at the French foundry Deberny Et Peignot by Charles Peignot. His wood-engraved essay illustrations displayed his meticulous skills and knowledge of letterforms. At the foundry, he designed various typefaces including Ondine, Méridien, and Président. Upon witnessing his marvelous work, Charles Peignot assigned Frutiger to convert extant typefaces for the new Linotype equipment, phototypesetting.

                        </p>
                        <div className={scienceStyles.image_container_small}>
                        <Image 
                            src='/images/frutiger0.png'
                            className={scienceStyles.image}
                            layout='fill'
                            objectFit="cover" 
                            >
                        </Image>
                        </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
