import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from "react-scroll-motion";

export default function ScrollMotion() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(0), Sticky(), MoveOut(0, -500))}>
            <h1>社長あいさつ</h1>
            <span style={{ fontSize: "2rem" }}>
            情報技術の目まぐるしい進歩により世の中が劇的に変化を遂げています。<br />
            私は海外留学から帰国後、IT営業業務を通じて、日々お客様とのコミニケーション第一に心がけ、<br />
            数々の企業を渡り歩いてきました。その中で、自身として一つの可能性を見出し2010年、個人出資にて現在の株式会社NTS JAPANを設立、人の繋がりをビジネスに生かすべく一つ一つの多種多様の御相談を弊社にてバイパスをし、大きなビジネスチャンスを掴めるよう、人から人、会社から会社へ繋がりを作り、理想を現実に近付ける為のビジネスモデルを形成するチャレンジこそが弊社基本運用方針でございます。
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h1>NTSとして出来る事</h1>
            <p style={{ fontSize: "2rem" }}>
            企業としての其々目標を掲げております。<br />
              N：New(新しい)<br />
              T：Technology (情報)、Tactics(戦略)、Thank(感謝)、Trust(信頼)<br />
              S：Support(支援)、Success(成功)、Service(貢献)<br />
            企業、そして一人の人間として、人々や社会の為に貢献する為に８つのNTSを存在目的としています。</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h1>ITソリューション事業</h1>
            <p style={{ fontSize: "1rem" }}>
            <h2>●SES事業</h2>
            ・SES(System Engineering Service)を通じて開発〜インフラ等の様々な技術者のアウトソースを低コストで提案出来る様心がけております。<br />

            <h2>●フィールドサービス事業</h2>
              ・クライアントPCのセッティングやキッティング等の展開作業も行なっております。<br />

            <h2>●IT保守</h2>
              ・PC周りに限らずシステム保守・運用等ITに関連する全般をサポート致します。<br />
              （ユーザー問い合わせ、運用監視、障害対応等）</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
            <h1 style={{ fontSize: "3em" }}>個人情報の利用目的について</h1>
            <span style={{ fontSize: "3em" }}>
            お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
