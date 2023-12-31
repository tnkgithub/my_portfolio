const Home = () => {
    return (
        <section className="text-gray-700" id="about">
            <div className="container mx-auto">
                <h1 className=" mt-24 text-center text-5xl underline decoration-cyan-500 decoration-solid">
                    About
                </h1>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10 md:flex-row">
                <div className="mb-10 w-5/6 md:mb-0 md:w-3/5 lg:w-96">
                    <img
                        className="rounded-md shadow-lg"
                        src="./imgs/my_big_img.JPG"
                        alt=""
                    />
                </div>
                <div className=" flex  flex-col items-center md:w-3/5  md:pl-8 lg:pl-12 xl:pl-24">
                    <h2 className="mb-4 text-center text-3xl font-medium text-gray-900 md:text-4xl">
                        田中駿平
                    </h2>
                    <a className="pb-6 indent-4 text-lg leading-relaxed">
                        北海道亀田郡七飯町（函館市の隣町）育ちの大学院生。小中高とサッカー部に所属。中学のときに見た映画
                        『トランスフォーマー』
                        に影響され，CGに興味を持つ。実家近くの公立はこだて未来大学に進学し，プログラミングの勉強を開始。プログラミングの楽しさに目覚める。優秀な先輩方に憧れ，大学院に進学を決意。研究はデジタルアーカイブにおける、画像とメタデータの類似性に基づいた探索支援。趣味はサッカー観戦
                        (特にコンサドーレ札幌を応援、プレミアリーグなどの海外リーグも観戦)，読書
                        (好きな作家は森見登美彦や伊藤計劃など。主にファンタジー
                        ・ SF ・
                        ミステリーを読み漁る)，プログラミング(主にフロントエンド)。
                    </a>
                    <a
                        href="https://github.com/tnkgithub"
                        className=" mt-4 inline-flex items-center rounded-lg bg-gray-200 px-5 py-3 duration-300 hover:bg-cyan-200 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="ml-3">
                            <span className=" font-medium">@tnkgithub</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
