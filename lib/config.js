configData = {
  numChatMax: 20,
  personalColor: true,
  badgeVisible: true,
  themeURI: "",
  theme: "default",
  themeName: "",
  msgExistDuration: 20,
  msgAniDuration: 0,
  debugLevel: 1,
  useDisplayName: true,
  loadCheerImgs: true,
  loadTwitchCons: true,
  consRealSubsOnly: true,
  loadDcCons: true,
  dcConsURI: "",
  subMonthsMsg: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg: "☆ {!0:{bits} 비트 }후원 ! ☆",
  loadClipPreview: true,
  clipReplaceMsg: "[ 클립 ]",
  webSocket: "wss://irc-ws.chat.twitch.tv:443",
  nick: "justinfan16845",
  pass: "foobar",
  channel: "tastimelon",
  retryInterval: 2,
  allMessageHandle: false,
  muteUser: ["Nightbot", "Ssakdook", "싹둑", "Hibiya_bot", "히비야봇"],
  deleteBanMsg: true,
  commands: [
    { exe: "clear", msg: "!!clear" },
    { exe: "theme", msg: "!!theme" }
  ],
  replaceMsgs: [
    { orig: /^![a-zA-Z]+/, to: "{no_display}" }
  ],
  scale: 1
};