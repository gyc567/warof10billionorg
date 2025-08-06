"use client";
import React from "react";

function MainComponent() {
  const [showWeChatQR, setShowWeChatQR] = React.useState(false);
  const [victimCount, setVictimCount] = React.useState(1247);
  const [lossCounter, setLossCounter] = React.useState(0);
  const [currentLang, setCurrentLang] = React.useState("zh-CN");

  // 多语言内容
  const translations = {
    "zh-CN": {
      // 导航
      navTitle: "百亿比特币追回",
      joinLawsuit: "加入诉讼",

      // 主标题
      heroTitle: "追回10万枚比特币",
      heroSubtitle: "为中国受害者讨回公道",
      heroDescription: "MTGOX破产事件中，日本当局无视中国受害者权益",
      heroDescription2: "我们发起全球集体诉讼，夺回属于你的资产",

      // 统计数据
      victimsJoined: "受害者已加入",
      targetBTC: "目标追回BTC",
      dailyLoss: "今日累计损失(USD)",

      // 社交分享
      shareToX: "分享到X",
      shareToFacebook: "分享到Facebook",
      shareToTelegram: "分享到Telegram",
      shareToWechat: "微信分享",

      // 事件真相
      truthTitle: "事件真相",
      event2014: "2014年2月",
      event2014Desc: "MTGOX交易所破产，85万枚比特币失踪，全球用户损失惨重",
      event2014_2023: "2014-2023年",
      event2014_2023Desc:
        "日本当局理赔过程中歧视中国受害者，未及时通知，导致大量中国用户无法获得赔偿",
      event2023: "2023年至今",
      event2023Desc:
        "我们发起全球集体诉讼，团结所有中国受害者，追回属于我们的10万枚比特币",

      // 行动呼吁
      actionTitle: "加入集体诉讼",
      actionDesc:
        "如果你是MTGOX中国受害者，请立即登记。我们将为每一位受害者争取最大赔偿。",
      emailRegister: "通过邮件登记",
      privacyNote:
        "所有信息严格保密，仅用于法律诉讼。我们承诺保护每一位受害者的隐私和权益。",

      // 证据展示
      evidenceTitle: "关键证据",
      evidence1Title: "MTGOX破产文件",
      evidence1Desc: "日本受托人官方报告，证明理赔过程中的不公正待遇",
      evidence2Title: "未送达通知证明",
      evidence2Desc: "大量中国受害者未收到理赔通知的证据材料",
      evidence3Title: "法律依据文件",
      evidence3Desc: "国际法和相关司法管辖权的法律依据",

      // 页脚
      footerTitle: "百亿比特币追回行动",
      footerDesc: "为MTGOX中国受害者争取公正赔偿，追回属于我们的比特币资产。",
      contactUs: "联系我们",
      disclaimer: "重要声明",
      disclaimerText:
        "本网站不构成法律建议。所有法律行动将在专业律师指导下进行。",
      copyright: "© 2023 百亿比特币追回行动 | 为正义而战，为权益而诉",

      // 微信二维码
      wechatQRTitle: "微信扫码分享",
      wechatQRGenerating: "二维码生成中...",
      close: "关闭",

      // 邮件内容
      emailSubject: "加入集体诉讼",
      emailBody: "我是MTGOX受害者，损失金额：___ BTC，联系方式：___",
    },

    "zh-TW": {
      // 導航
      navTitle: "百億比特幣追回",
      joinLawsuit: "加入訴訟",

      // 主標題
      heroTitle: "追回10萬枚比特幣",
      heroSubtitle: "為中國受害者討回公道",
      heroDescription: "MTGOX破產事件中，日本當局無視中國受害者權益",
      heroDescription2: "我們發起全球集體訴訟，奪回屬於你的資產",

      // 統計數據
      victimsJoined: "受害者已加入",
      targetBTC: "目標追回BTC",
      dailyLoss: "今日累計損失(USD)",

      // 社交分享
      shareToX: "分享到X",
      shareToFacebook: "分享到Facebook",
      shareToTelegram: "分享到Telegram",
      shareToWechat: "微信分享",

      // 事件真相
      truthTitle: "事件真相",
      event2014: "2014年2月",
      event2014Desc: "MTGOX交易所破產，85萬枚比特幣失蹤，全球用戶損失慘重",
      event2014_2023: "2014-2023年",
      event2014_2023Desc:
        "日本當局理賠過程中歧視中國受害者，未及時通知，導致大量中國用戶無法獲得賠償",
      event2023: "2023年至今",
      event2023Desc:
        "我們發起全球集體訴訟，團結所有中國受害者，追回屬於我們的10萬枚比特幣",

      // 行動呼籲
      actionTitle: "加入集體訴訟",
      actionDesc:
        "如果你是MTGOX中國受害者，請立即登記。我們將為每一位受害者爭取最大賠償。",
      emailRegister: "通過郵件登記",
      privacyNote:
        "所有信息嚴格保密，僅用於法律訴訟。我們承諾保護每一位受害者的隱私和權益。",

      // 證據展示
      evidenceTitle: "關鍵證據",
      evidence1Title: "MTGOX破產文件",
      evidence1Desc: "日本受託人官方報告，證明理賠過程中的不公正待遇",
      evidence2Title: "未送達通知證明",
      evidence2Desc: "大量中國受害者未收到理賠通知的證據材料",
      evidence3Title: "法律依據文件",
      evidence3Desc: "國際法和相關司法管轄權的法律依據",

      // 頁腳
      footerTitle: "百億比特幣追回行動",
      footerDesc: "為MTGOX中國受害者爭取公正賠償，追回屬於我們的比特幣資產。",
      contactUs: "聯繫我們",
      disclaimer: "重要聲明",
      disclaimerText:
        "本網站不構成法律建議。所有法律行動將在專業律師指導下進行。",
      copyright: "© 2023 百億比特幣追回行動 | 為正義而戰，為權益而訴",

      // 微信二維碼
      wechatQRTitle: "微信掃碼分享",
      wechatQRGenerating: "二維碼生成中...",
      close: "關閉",

      // 郵件內容
      emailSubject: "加入集體訴訟",
      emailBody: "我是MTGOX受害者，損失金額：___ BTC，聯繫方式：___",
    },

    en: {
      // Navigation
      navTitle: "Bitcoin Recovery Action",
      joinLawsuit: "Join Lawsuit",

      // Hero
      heroTitle: "Recover 100,000 Bitcoin",
      heroSubtitle: "Justice for Chinese Victims",
      heroDescription:
        "Japanese authorities ignored Chinese victims' rights in MTGOX bankruptcy",
      heroDescription2: "We launch global class action to reclaim your assets",

      // Statistics
      victimsJoined: "Victims Joined",
      targetBTC: "Target BTC Recovery",
      dailyLoss: "Daily Loss (USD)",

      // Social Share
      shareToX: "Share on X",
      shareToFacebook: "Share on Facebook",
      shareToTelegram: "Share on Telegram",
      shareToWechat: "WeChat Share",

      // Truth Timeline
      truthTitle: "The Truth",
      event2014: "February 2014",
      event2014Desc:
        "MTGOX exchange collapsed, 850,000 Bitcoin disappeared, global users suffered massive losses",
      event2014_2023: "2014-2023",
      event2014_2023Desc:
        "Japanese authorities discriminated against Chinese victims during compensation, failed to notify in time, causing many Chinese users unable to receive compensation",
      event2023: "2023-Present",
      event2023Desc:
        "We launch global class action, uniting all Chinese victims to recover our 100,000 Bitcoin",

      // Call to Action
      actionTitle: "Join Class Action",
      actionDesc:
        "If you are a Chinese MTGOX victim, please register immediately. We will fight for maximum compensation for every victim.",
      emailRegister: "Register via Email",
      privacyNote:
        "All information is strictly confidential and used only for legal proceedings. We promise to protect every victim's privacy and rights.",

      // Evidence
      evidenceTitle: "Key Evidence",
      evidence1Title: "MTGOX Bankruptcy Files",
      evidence1Desc:
        "Official trustee reports proving unfair treatment during compensation process",
      evidence2Title: "Undelivered Notice Proof",
      evidence2Desc:
        "Evidence that many Chinese victims did not receive compensation notices",
      evidence3Title: "Legal Basis Documents",
      evidence3Desc:
        "International law and relevant jurisdictional legal basis",

      // Footer
      footerTitle: "Bitcoin Recovery Action",
      footerDesc:
        "Fighting for fair compensation for MTGOX Chinese victims, recovering our Bitcoin assets.",
      contactUs: "Contact Us",
      disclaimer: "Important Notice",
      disclaimerText:
        "This website does not constitute legal advice. All legal actions will be conducted under professional legal guidance.",
      copyright:
        "© 2023 Bitcoin Recovery Action | Fighting for Justice and Rights",

      // WeChat QR
      wechatQRTitle: "WeChat QR Share",
      wechatQRGenerating: "Generating QR Code...",
      close: "Close",

      // Email Content
      emailSubject: "Join Class Action Lawsuit",
      emailBody: "I am a MTGOX victim, loss amount: ___ BTC, contact: ___",
    },

    ja: {
      // ナビゲーション
      navTitle: "ビットコイン回収行動",
      joinLawsuit: "訴訟参加",

      // ヒーロー
      heroTitle: "10万ビットコインを回収",
      heroSubtitle: "中国被害者のための正義",
      heroDescription: "MTGOX破綻事件で日本当局は中国被害者の権利を無視",
      heroDescription2:
        "私たちは世界規模の集団訴訟を起こし、あなたの資産を取り戻します",

      // 統計
      victimsJoined: "参加被害者数",
      targetBTC: "回収目標BTC",
      dailyLoss: "日次損失(USD)",

      // ソーシャルシェア
      shareToX: "Xでシェア",
      shareToFacebook: "Facebookでシェア",
      shareToTelegram: "Telegramでシェア",
      shareToWechat: "WeChatシェア",

      // 真実のタイムライン
      truthTitle: "事件の真相",
      event2014: "2014年2月",
      event2014Desc:
        "MTGOX取引所が破綻、85万ビットコインが消失、世界中のユーザーが甚大な損失",
      event2014_2023: "2014-2023年",
      event2014_2023Desc:
        "日本当局は賠償過程で中国被害者を差別、適時通知せず、多くの中国ユーザーが賠償を受けられない状況に",
      event2023: "2023年-現在",
      event2023Desc:
        "私たちは世界規模の集団訴訟を起こし、すべての中国被害者を団結させ、10万ビットコインを回収",

      // 行動呼びかけ
      actionTitle: "集団訴訟に参加",
      actionDesc:
        "あなたがMTGOX中国被害者なら、すぐに登録してください。すべての被害者のために最大限の賠償を勝ち取ります。",
      emailRegister: "メールで登録",
      privacyNote:
        "すべての情報は厳格に機密保持され、法的手続きにのみ使用されます。すべての被害者のプライバシーと権利を保護することを約束します。",

      // 証拠
      evidenceTitle: "重要な証拠",
      evidence1Title: "MTGOX破綻書類",
      evidence1Desc: "賠償過程での不公正な扱いを証明する日本管財人の公式報告",
      evidence2Title: "未送達通知の証明",
      evidence2Desc: "多くの中国被害者が賠償通知を受け取らなかった証拠資料",
      evidence3Title: "法的根拠書類",
      evidence3Desc: "国際法および関連司法管轄権の法的根拠",

      // フッター
      footerTitle: "ビットコイン回収行動",
      footerDesc:
        "MTGOX中国被害者のための公正な賠償を求め、私たちのビットコイン資産を回収。",
      contactUs: "お問い合わせ",
      disclaimer: "重要な声明",
      disclaimerText:
        "このウェブサイトは法的助言を構成しません。すべての法的行動は専門弁護士の指導の下で行われます。",
      copyright: "© 2023 ビットコイン回収行動 | 正義と権利のために戦う",

      // WeChat QR
      wechatQRTitle: "WeChat QRシェア",
      wechatQRGenerating: "QRコード生成中...",
      close: "閉じる",

      // メール内容
      emailSubject: "集団訴訟参加",
      emailBody: "私はMTGOX被害者です。損失額：___ BTC、連絡先：___",
    },
  };

  const t = translations[currentLang];

  React.useEffect(() => {
    // 从URL参数或localStorage获取语言设置
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get("lang");
    const langFromStorage = localStorage.getItem("preferred-language");

    if (langFromUrl && translations[langFromUrl]) {
      setCurrentLang(langFromUrl);
      localStorage.setItem("preferred-language", langFromUrl);
    } else if (langFromStorage && translations[langFromStorage]) {
      setCurrentLang(langFromStorage);
    } else {
      // 根据浏览器语言自动检测
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith("zh-TW") || browserLang.startsWith("zh-HK")) {
        setCurrentLang("zh-TW");
      } else if (browserLang.startsWith("zh")) {
        setCurrentLang("zh-CN");
      } else if (browserLang.startsWith("ja")) {
        setCurrentLang("ja");
      } else {
        setCurrentLang("en");
      }
    }
  }, []);

  React.useEffect(() => {
    // Simulate real-time victim count updates
    const victimInterval = setInterval(() => {
      setVictimCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 30000);

    // Daily loss counter (assuming $120,000 per day)
    const lossInterval = setInterval(() => {
      setLossCounter((prev) => prev + 1.39); // $120,000 / 86400 seconds
    }, 1000);

    return () => {
      clearInterval(victimInterval);
      clearInterval(lossInterval);
    };
  }, []);

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("preferred-language", lang);
    // 更新URL参数
    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  };

  const shareToSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(t.heroTitle + " - " + t.heroSubtitle);
    const text = encodeURIComponent(
      t.heroTitle + "！" + t.heroSubtitle + " #MTGOX #Bitcoin"
    );

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case "wechat":
        setShowWeChatQR(true);
        return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚖️</span>
              <span className="font-bold text-xl text-gray-900">
                {t.navTitle}
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => switchLanguage("zh-CN")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    currentLang === "zh-CN"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  简体
                </button>
                <button
                  onClick={() => switchLanguage("zh-TW")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    currentLang === "zh-TW"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  繁體
                </button>
                <button
                  onClick={() => switchLanguage("en")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    currentLang === "en"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("ja")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    currentLang === "ja"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  日本語
                </button>
              </div>

              <a
                href={`mailto:victims@warof10billion.org?subject=${encodeURIComponent(
                  t.emailSubject
                )}&body=${encodeURIComponent(t.emailBody)}`}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition-colors"
              >
                {t.joinLawsuit}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.heroTitle}
            <br />
            <span className="text-yellow-400">{t.heroSubtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.heroDescription}
            <br />
            {t.heroDescription2}
          </p>

          {/* Real-time Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400">
                {victimCount.toLocaleString()}
              </div>
              <div className="text-sm">{t.victimsJoined}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">100,000</div>
              <div className="text-sm">{t.targetBTC}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400">
                ${Math.floor(lossCounter).toLocaleString()}
              </div>
              <div className="text-sm">{t.dailyLoss}</div>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => shareToSocial("twitter")}
              className="flex items-center space-x-2 bg-[#1DA1F2] hover:bg-[#1a91da] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>🐦</span>
              <span>{t.shareToX}</span>
            </button>
            <button
              onClick={() => shareToSocial("facebook")}
              className="flex items-center space-x-2 bg-[#4267B2] hover:bg-[#365899] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>📘</span>
              <span>{t.shareToFacebook}</span>
            </button>
            <button
              onClick={() => shareToSocial("telegram")}
              className="flex items-center space-x-2 bg-[#0088cc] hover:bg-[#0077b3] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>✈️</span>
              <span>{t.shareToTelegram}</span>
            </button>
            <button
              onClick={() => shareToSocial("wechat")}
              className="flex items-center space-x-2 bg-[#07C160] hover:bg-[#06a84f] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>💬</span>
              <span>{t.shareToWechat}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t.truthTitle}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {t.event2014}
                      </div>
                      <p className="text-gray-700">{t.event2014Desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        {t.event2014_2023}
                      </div>
                      <p className="text-gray-700">{t.event2014_2023Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {t.event2023}
                      </div>
                      <p className="text-gray-700">{t.event2023Desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            {t.actionTitle}
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            {t.actionDesc}
          </p>
          <a
            href={`mailto:victims@warof10billion.org?subject=${encodeURIComponent(
              t.emailSubject
            )}&body=${encodeURIComponent(t.emailBody)}`}
            className="inline-flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold transition-colors shadow-lg hover:shadow-xl"
          >
            <span>📧</span>
            <span>{t.emailRegister}</span>
          </a>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            {t.privacyNote}
          </p>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t.evidenceTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.evidence1Title}</h3>
              <p className="text-gray-600">{t.evidence1Desc}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.evidence2Title}</h3>
              <p className="text-gray-600">{t.evidence2Desc}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.evidence3Title}</h3>
              <p className="text-gray-600">{t.evidence3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">⚖️</span>
                <span className="font-bold text-xl">{t.footerTitle}</span>
              </div>
              <p className="text-gray-400">{t.footerDesc}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t.contactUs}</h3>
              <div className="space-y-2">
                <p className="text-gray-400">📧 victims@warof10billion.org</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://twitter.com/warof10billion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://t.me/warof10billion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">{t.disclaimer}</h3>
              <p className="text-gray-400 text-sm">{t.disclaimerText}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t.copyright}</p>
          </div>
        </div>
      </footer>

      {/* WeChat QR Modal */}
      {showWeChatQR && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowWeChatQR(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-sm mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-center mb-4">
              {t.wechatQRTitle}
            </h3>
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-2 block">📱</span>
                <p className="text-sm text-gray-600">{t.wechatQRGenerating}</p>
              </div>
            </div>
            <button
              onClick={() => setShowWeChatQR(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* SEO Meta Tags */}
      <div style={{ display: "none" }}>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: t.footerTitle,
            url: "https://warof10billion.org",
            description: t.footerDesc,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Legal Assistance",
              email: "victims@warof10billion.org",
            },
          })}
        </script>
      </div>
    </div>
  );
}

export default MainComponent;