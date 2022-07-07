import React from 'react'
import './HomePage.css'

export const HomePage = () => {
    return (
        <>
            <div>
                <div className="firstPartOfHomePage">
                    <video
                        src="https://video.wixstatic.com/video/c837a6_02de7d4c43d44b7b890854049ed75da8/1080p/mp4/file.mp4"
                        autoPlay
                        muted
                        loop
                        className="homePageVideo"
                    />
                    <div className="container">
                        <div className="upperVideo">
                            <h1 className="homePageTitle">
                                У ВИРІ БЕЗПІЛОТНИХ
                                <br /> ТЕХНОЛОГІЙ
                            </h1>
                            <p>
                                Найбезпечніші безпілотні автомобілі для вас від
                                Автоном
                            </p>
                        </div>
                    </div>
                    <img
                        className="eclipse"
                        src="https://static.wixstatic.com/media/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png/v1/fill/w_1899,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_3ebbf7ac3e26427b83ca50c82aabaaf8~mv2.png"
                    ></img>
                </div>
                <div className="secondPartOfHomePage">
                    <div className="container">
                        <div className="secondPartPosition">
                            <div className="leftPart">
                                <div className="title2">
                                    <p>ВІЗІЯ</p>
                                </div>
                                <div className="content21">
                                    <p>
                                        Ми змінюємо уявлення світу про майбутні
                                        автомобілі
                                    </p>
                                </div>
                                <div className="content22">
                                    <p>
                                        Це абзац. Натисніть, щоб додати та
                                        змінити текст. Просто натисніть
                                        «Редагувати текст» або клацніть двічі,
                                        щоб додати текст і налаштувати шрифт.
                                        Тут ви можете написати історію та
                                        розказати користувачам більше про себе.
                                    </p>
                                </div>
                            </div>
                            <div className="rightPart">
                                <img src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_912,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
