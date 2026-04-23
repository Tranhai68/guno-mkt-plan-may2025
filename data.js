// GUNO MKT PLAN — VỊ NHÀ CAMPAIGN — THÁNG 5/2026
const DATA_KEY = 'guno_mkt_plan_v3';

const DEFAULT_DATA = {
  meta: {
    brandName: 'GUNO', planTitle: 'CHIẾN DỊCH', planSubtitle: 'GUNO — VỊ NHÀ',
    bstName: 'GUNO FAMILY', campaignName: 'GUNO — Vị Nhà', bstCount: 15,
    tagline: 'Gia đình là tuyệt vời nhất - Guno Gu của mọi nhà',
    motto: 'Gia đình là tuyệt vời nhất - Guno Gu của mọi nhà',
    brandSlogan: 'GUNO — Gu của mọi nhà',
    targetAudience: 'Nữ 25-50 tuổi, gia đình Việt', month: 'Tháng 5/2026'
  },
  targets: {
    totalRevenue: 50000000000, totalOrders: 83333, aov: 600000,
    totalBudget: 17500000000,
    fbAdsCost: 3600000000, platformCost: 11400000000, kolCommission: 1500000000, brandingCost: 1000000000,
    roasTarget: 3.1, cpoTarget: 192000
  },
  channels: [
    { id:'tiktok', name:'TikTok', revenue:26000000000, pct:52, orders:43333, color:'#ff3b5c', icon:'♪',
      adsBudget:7800000000, costNote:'30% KPI sàn', roas:3.3, cpo:180000,
      structure:[
        {name:'Livestream (MegaLive Ngọc Trinh + Daily)',pct:55,value:14300000000},
        {name:'Video Shopping + Affiliate KOC',pct:30,value:7800000000},
        {name:'Showcase/Organic',pct:15,value:3900000000}
      ]},
    { id:'shopee', name:'Shopee', revenue:12000000000, pct:24, orders:20000, color:'#ee4d2d', icon:'🛒',
      adsBudget:3600000000, costNote:'30% KPI sàn', roas:3.3, cpo:180000,
      structure:[
        {name:'5.5 MegaLive Phạm Thoại',pct:30,value:3600000000},
        {name:'Shopee Live Daily',pct:25,value:3000000000},
        {name:'Shopee Ads',pct:25,value:3000000000},
        {name:'Organic + Affiliate',pct:20,value:2400000000}
      ]},
    { id:'facebook', name:'Facebook', revenue:12000000000, pct:24, orders:20000, color:'#1877f2', icon:'f',
      adsBudget:3600000000, costNote:'30% KPI FB', roas:3.3, cpo:180000,
      structure:[
        {name:'Inbox/Message Ads',pct:45,value:5400000000},
        {name:'Website/Landing Page',pct:20,value:2400000000},
        {name:'Reels + Organic + TVC',pct:20,value:2400000000},
        {name:'Community + Retarget',pct:15,value:1800000000}
      ]}
  ],
  phases: [
    { id:1, name:'WARM-UP', date:'20/4 — 4/5', budget:2000000000, revenue:5000000000, roas:2.5,
      desc:'Teaser BST Guno Family. Seeding 30-50 KOC. PR bài viết. Countdown "Guno Family is coming". Grand Launch 1/5.',
      tasks:15, color:'#7c3aed' },
    { id:2, name:'🔥 SHOPEE 5.5 + PHẠM THOẠI', date:'5/5', budget:800000000, revenue:2500000000, roas:3.1,
      desc:'MEGALIVE PHẠM THOẠI marathon 6-8h trên Shopee 5.5. Push Guno Family Box. Bán đúng giá, sàn tự push voucher.',
      tasks:6, color:'#f59e0b' },
    { id:3, name:'🔥 IGNITE — Ngày Mẹ + Haidilao', date:'6/5 — 10/5', budget:3000000000, revenue:10000000000, roas:3.3,
      desc:'\"Yêu Mẹ, tặng GU đẹp nhất\". GUNO x HAIDILAO bắt đầu. TVC billboard launch. Mega KOL wave. Mật ngữ viral. Combo Mẹ-Con.',
      tasks:12, color:'#ec4899' },
    { id:4, name:'🔥 IGNITE — Gia Đình + NGỌC TRINH', date:'11/5 — 15/5', budget:3000000000, revenue:9000000000, roas:3.0,
      desc:'MEGALIVE NGỌC TRINH 15/5 trên TikTok Shop. \"Cả nhà một GU\". Haidilao tiếp tục. #GunoFamilyChallenge. CGV/Coffee House wave 2.',
      tasks:10, color:'#06b6d4' },
    { id:5, name:'IGNITE — Push Peak', date:'16/5 — 20/5', budget:2500000000, revenue:8000000000, roas:3.2,
      desc:'Haidilao kết thúc 20/5. KOC phủ sóng tối đa. UGC compilation. Flash Friday. Affiliate push cực mạnh.',
      tasks:8, color:'#f97316' },
    { id:6, name:'SUSTAIN + Retarget', date:'21/5 — 25/5', budget:2500000000, revenue:9500000000, roas:3.8,
      desc:'Thu hoạch. Retargeting toàn diện. Best Seller push. \"Guno Family Moments\" compilation. Customer testimonials.',
      tasks:8, color:'#10b981' },
    { id:7, name:'CLOSE + Pre 6.6', date:'26/5 — 31/5', budget:2200000000, revenue:6000000000, roas:2.7,
      desc:'\"Last Call Guno Family\". Combo cuối cùng. Pre-order BST hè 6.6. Recap chiến dịch Vị Nhà.',
      tasks:6, color:'#8b5cf6' }
  ],
  programs: [
    {num:'01',name:'Grand Launch BST Guno Family',date:'1-4/5',budget:2000000000,revenue:5000000000,roi:'2.5x',
      mechanism:'Grand Launch BST Guno Family. TVC teaser. KOC seeding. Bán đúng giá, sàn tự push voucher.',
      kpi:'Đơn: ~8.300 | New followers: +30K | Brand search +100%',eval:'≥80% DT = OK | <60% = Contingency'},
    {num:'02',name:'🔥 MEGALIVE PHẠM THOẠI — Shopee 5.5',date:'5/5',budget:800000000,revenue:2500000000,roi:'3.1x',
      mechanism:'Marathon 6-8h Shopee 5.5. Push Guno Family Box. Bán đúng giá, sàn tự có voucher.',
      kpi:'GMV MegaLive: ≥ 2 tỷ | Peak CCU: ≥ 5.000',eval:'So sánh GMV vs ngày thường x5-6'},
    {num:'03',name:'💕 Yêu Mẹ, Tặng GU + Haidilao Launch',date:'6-10/5',budget:3000000000,revenue:10000000000,roi:'3.3x',
      mechanism:'Combo Mẹ-Con + Gói quà premium. HAIDILAO activation bắt đầu. TVC billboard launch. Mega KOL wave.',
      kpi:'Đơn combo Mẹ-Con: ≥ 3.000 | UGC Haidilao: ≥ 100 video | Brand search +200%',eval:'CR combo + Haidilao footfall + UGC volume'},
    {num:'04',name:'🔥 Cả Nhà Một GU + MEGALIVE NGỌC TRINH',date:'11-15/5',budget:3000000000,revenue:9000000000,roi:'3.0x',
      mechanism:'MEGALIVE NGỌC TRINH 15/5 TikTok Shop 4h prime time. Family Set combo. #GunoFamilyChallenge. Haidilao + CGV wave 2.',
      kpi:'GMV Ngọc Trinh: ≥ 2.5 tỷ | Combo 3+: ≥ 2.000 | AOV ≥ 1.2M',eval:'Peak CCU + AOV combo + Challenge reach'},
    {num:'05',name:'Push Peak — KOC Phủ Sóng',date:'16-20/5',budget:2500000000,revenue:8000000000,roi:'3.2x',
      mechanism:'Haidilao kết thúc 20/5. KOC 20-30 người phủ sóng. UGC compilation. Flash Friday. Affiliate push max.',
      kpi:'Affiliate GMV ≥ 3 tỷ | UGC tổng ≥ 500 video',eval:'ROAS retarget vs prospecting'},
    {num:'06',name:'Sustain + Best Seller',date:'21-25/5',budget:2500000000,revenue:9500000000,roi:'3.8x',
      mechanism:'Retargeting toàn diện. Best Seller push mạnh. \"Guno Family Moments\" compilation. Customer testimonials. CRM push.',
      kpi:'ROAS retarget ≥ 5x | Repeat rate ≥ 20%',eval:'Retarget efficiency + CLV'},
    {num:'07',name:'Last Call Guno Family + Pre 6.6',date:'26-31/5',budget:2200000000,revenue:6000000000,roi:'2.7x',
      mechanism:'\"Last Call Guno Family\". Pre-order BST hè 6.6. UGC recap tổng chiến dịch. Bán đúng giá.',
      kpi:'DT 6 ngày: ≥ 6 tỷ | Pre-order 6.6: ≥ 2.000 đơn',eval:'Close rate vs tháng average'}
  ],
  branding: {
    totalBudget: 1000000000,
    message: 'Gia đình là tuyệt vời nhất - Guno Gu của mọi nhà',
    slogan: 'GUNO — Gu của mọi nhà',
    costNote: 'Ngọc Trinh + Phạm Thoại = hoa hồng (10% tính riêng). KOL PR tính riêng.',
    ambassadors: [
      {name:'Ngọc Trinh',role:'MegaLive 15/5',desc:'Hoa hồng trên doanh số (đã trong 30% sàn). Không phí booking.'},
      {name:'Phạm Thoại',role:'MegaLive 5/5',desc:'Hoa hồng trên doanh số (đã trong 30% sàn). Không phí booking.'}
    ],
    subMessages: [
      {phase:'Warm-up',msg:'Guno Family is coming — Gia đình là tuyệt vời nhất'},
      {phase:'Ngày Mẹ',msg:'Yêu Mẹ, tặng GU đẹp nhất'},
      {phase:'Gia đình',msg:'Cả nhà một GU — Cả nhà yêu thương'},
      {phase:'Sustain',msg:'Mỗi nhà một GU — Mọi nhà chọn GUNO'}
    ],
    giftProgram: {
      sets: 200, costPerSet: 200000, packagingPerSet: 30000,
      totalSetCost: 46000000,
      note: '200 set đồ Guno (COGS 200K/bộ) + hộp + thiệp = ~46M'
    },
    voucherProgram: {
      total: 1000, types: '50K - 100K', channel: 'Chỉ áp dụng Facebook', validity: '30 ngày',
      maxCost: 75000000,
      note: '1.000 voucher (50K-100K) chỉ dùng trên FB, hết hạn 30 ngày'
    },
    allocation: [
      {name:'TVC Billboard + Production',budget:250000000},
      {name:'Haidilao Partnership (decor, booth, logistics)',budget:120000000},
      {name:'Gift Program — 200 set đồ + hộp + thiệp',budget:46000000},
      {name:'Voucher FB (1.000 voucher 50K-100K)',budget:75000000},
      {name:'KOL PR (không tính Ngọc Trinh/Phạm Thoại)',budget:200000000},
      {name:'#GunoFamilyChallenge + UGC',budget:150000000},
      {name:'PR & Media (báo chí)',budget:80000000},
      {name:'Dự phòng',budget:79000000}
    ]
  },
  campaign: {
    name:'GUNO — VỊ NHÀ', bst:'Guno Family',
    tagline:'Gia đình là tuyệt vời nhất - Guno Gu của mọi nhà',
    timeline:'20/4 — 31/5/2026 (xuyên suốt)',
    insight:'Phụ nữ Việt luôn lo cho gia đình trước bản thân. Khi ai đó tặng Mẹ bộ đồ đẹp — đó là lời nhắn: "Mẹ xứng đáng được đẹp". GUNO muốn mỗi gia đình Việt có "Vị Nhà" riêng — ấm cúng, đẹp, và đầy yêu thương.',
    campaignFunnel:[
      {step:1,phase:'Awareness',name:'OOH + TVC gây tò mò',timeline:'20/4 — 5/5',icon:'📢',desc:'Billboard "GU GU GUNO" tại 4 vị trí đắc địa HN+HCM + TVC 30s trên LED. Visual gây tò mò, không giải thích ngay — khiến người xem hỏi "Guno là gì?"',kpi:'500K+ impressions OOH/ngày, 2M+ reach TVC'},
      {step:2,phase:'Curiosity',name:'Social decode + KOL PR',timeline:'1/5 — 7/5',icon:'🔍',desc:'KOL PR review BST Guno Family (try-on, outfit). Seeding bài "Guno là thương hiệu gì?", "đồ bộ gia đình matching" trên Threads/community. Giải thích brand TRƯỚC activation.',kpi:'200K engagement, 50+ bài seeding'},
      {step:3,phase:'Participation',name:'MegaLive 5.5 — Phạm Thoại',timeline:'5/5',icon:'🔴',desc:'Grand Launch BST Guno Family trên Shopee. Phạm Thoại live 6-8h marathon. Push Family Box bùng nổ. Tạo đỉnh doanh thu đầu tiên.',kpi:'GMV ≥ 2 tỷ, 500K+ views live'},
      {step:4,phase:'Activation',name:'Haidilao + CGV — Ritual UGC',timeline:'10/5 — 20/5',icon:'🍲',desc:'Activation tại 5 cơ sở Haidilao + 2 CGV. Mật ngữ → staff đáp → cài charm → props chụp → UGC → quà + voucher kéo ngược. Biến buzz thành hành vi.',kpi:'1.200 lượt tham gia, 500+ UGC videos'},
      {step:5,phase:'Peak Conversion',name:'MegaLive 15/5 — Ngọc Trinh',timeline:'15/5',icon:'⭐',desc:'Ngọc Trinh live Ngày Gia đình trên TikTok Shop. Prime time 20:00-24:00. Chốt BST Family, combo Mẹ-Con, Family Box. Đỉnh doanh thu thứ hai.',kpi:'GMV ≥ 2.5 tỷ, 1M+ views live'},
      {step:6,phase:'Pull-back',name:'Voucher → Store Conversion',timeline:'15/5 — 31/5',icon:'🔄',desc:'1.000 voucher từ Haidilao kéo traffic ngược về Guno Facebook/sàn. Retarget người tương tác UGC. E-card + gift-ready packaging rút ngắn quyết định mua.',kpi:'Tỷ lệ đổi voucher ≥ 30%, AOV voucher ≥ 500K'}
    ],
    haidilao: {
      name:'GUNO x HAIDILAO — Vị Nhà',
      motto:'Gia đình là tuyệt vời nhất',
      staffResponse:'GU GU GUNO!',
      timeline:'10/5 — 20/5 (11 ngày)',
      locations:[
        {city:'HCM',name:'Haidilao Bitexco',address:'Tầng 5 Bitexco Tower, Q1',note:'Traffic cao nhất Q1 HCM',voucherCode:'GN-BT'},
        {city:'HCM',name:'Haidilao Vạn Hạnh Mall',address:'Tầng 4 Vạn Hạnh Mall, Q10',note:'Khu vực gia đình đông',voucherCode:'GN-VH'},
        {city:'HN',name:'Haidilao Vincom Bà Triệu',address:'Tầng 6 Vincom Bà Triệu',note:'Vị trí đắc địa nhất HN',voucherCode:'GN-VBT'},
        {city:'HN',name:'Haidilao Times City',address:'Tầng 5 Times City, Hai Bà Trưng',note:'Khu dân cư gia đình',voucherCode:'GN-TC'},
        {city:'HN',name:'Haidilao Royal City',address:'B2 Royal City, Thanh Xuân',note:'TTTM gia đình lớn nhất HN',voucherCode:'GN-RC'}
      ],
      ritual:[
        {step:1,action:'Đọc mật ngữ',desc:'Khách nói: "Gia đình là tuyệt vời nhất"',icon:'🗣️'},
        {step:2,action:'Staff đáp lại',desc:'Nhân viên Haidilao đáp: "GU GU GUNO!" + cài charm Guno lên áo khách',icon:'🎭'},
        {step:3,action:'Chụp ảnh props',desc:'Chụp ảnh cùng backdrop "Guno Family Corner" — props: đồ bộ, hoa, thiệp, bảng chữ',icon:'📸'},
        {step:4,action:'Đăng bài UGC',desc:'Đăng TikTok/Facebook/Instagram kèm #GunoViNha #GunoFamily #GuCuaMoiNha',icon:'📱'},
        {step:5,action:'Nhận quà + Voucher',desc:'Nhận quà ngay theo tier + voucher kéo ngược về Guno store',icon:'🎁'}
      ],
      decor:'Guno Family Corner: backdrop chụp ảnh (2x3m), display BST Guno Family, tent card mỗi bàn, charm Guno để cài, bảng chữ "Gia đình là tuyệt vời nhất"',
      tiers:[
        {tier:'🎟️ Mọi khách đọc mật ngữ',condition:'Đọc mật ngữ',gift:'Voucher 50K mua tại FB Guno (30 ngày)',qty:600,cost:50000,purpose:'Kéo traffic ngược về Guno'},
        {tier:'📸 Check-in + Đăng bài',condition:'Đọc + Check-in Facebook/Instagram',gift:'Voucher 100K mua tại FB Guno (30 ngày)',qty:400,cost:100000,purpose:'Tăng UGC + kéo traffic'},
        {tier:'🎬 Quay video TikTok',condition:'Quay video TikTok tag @guno + mật ngữ',gift:'1 set đồ Guno Family (COGS 200K + hộp + thiệp)',qty:200,cost:230000,purpose:'UGC chất lượng cao, viral'},
        {tier:'💳 Bill từ 800K+',condition:'Hóa đơn Haidilao ≥ 800K',gift:'Charm Guno ngẫu nhiên',qty:300,cost:30000,purpose:'Kích tăng bill'},
        {tier:'🎁 Bill từ 1.2M+',condition:'Hóa đơn Haidilao ≥ 1.200K',gift:'Guno Family Box mini (1 áo)',qty:100,cost:150000,purpose:'Trải nghiệm sản phẩm thật'}
      ],
      totalGifts:1600, budget:150000000,
      voucherTracking:{
        format:'Mã riêng theo điểm: GN-[MÃ CS]-[MỨC] (VD: GN-BT-50, GN-TC-100)',
        qr:'QR trên voucher → landing page /haidilao → tracking source chính xác',
        metrics:['Tỷ lệ đổi voucher (theo mã, theo điểm)','Doanh thu sinh từ voucher','AOV khách từ Haidilao','SKU bán tốt sau activation','Thời gian đổi voucher trung bình']
      },
      giftNote:'600 voucher 50K + 400 voucher 100K + 200 set đồ + 300 charm + 100 Family Box mini = 1.600 phần quà'
    },
    cgv: {
      name:'GUNO x CGV — Cả nhà xem phim, cả nhà đẹp',
      timeline:'14/5 — 20/5 (7 ngày, tuần Gia đình)',
      locations:[
        {city:'HCM',name:'CGV Crescent Mall',address:'Q7',note:'TTTM gia đình đông nhất Q7'},
        {city:'HN',name:'CGV Vincom Royal City',address:'Thanh Xuân',note:'Khu gia đình lớn nhất HN'}
      ],
      program:'Khách mua 2 vé phim + check-in → nhận voucher Guno 50K. Standee Guno Family tại lobby. Tent card quảng cáo trên khay bắp.',
      budget:30000000,
      note:'Chi phí: standee, tent card, voucher (đã trong quỹ Branding)'
    },
    seedingPlan:[
      {layer:1,name:'Tò mò',timeline:'20-30/4',icon:'🤔',channels:['OOH billboard','Threads cá nhân','Community marketing/giới trẻ'],content:['Visual "GU GU GUNO" gây tò mò trên đường','Bài seeding: "quảng cáo gì mà khắp nơi GUNO"','Format: vô tri nhưng buồn cười, tạo tranh luận'],kpi:'500K reach organic, 1K+ comments',goal:'Không bán. Chỉ tạo thứ để người ta NÓI.'},
      {layer:2,name:'Giải thích',timeline:'1-7/5',icon:'💡',channels:['KOL PR (3-5 người 100K-1M)','Bài phân tích trên page marketing','Review BST trên TikTok/Instagram'],content:['KOL try-on BST Guno Family matching','Bài: "Guno bán gì? Vì sao collab Haidilao?"','Content: đồ bộ gia đình, quà tặng Mẹ'],kpi:'200K engagement, 50+ bài decode',goal:'Chuyển từ "nhớ mật ngữ" sang "hiểu brand bán gì". BẮT BUỘC trước activation.'},
      {layer:3,name:'Kéo traffic',timeline:'8-15/5',icon:'📍',channels:['Community local/mall review','Group gia đình/mẹ bỉm','KOC affiliate 20-30 người'],content:['Bài: "Ăn Haidilao săn đồ Guno — chỉ 5 điểm"','Thông báo: địa điểm + deadline + quà + cách nhận','Countdown: "còn 3 ngày" FOMO'],kpi:'50K clicks, 2K share',goal:'Từ branding sang activation. Deadline + địa điểm + quà.'},
      {layer:4,name:'UGC tại điểm',timeline:'10-20/5',icon:'🎬',channels:['Tại 5 Haidilao + 2 CGV','Khách tự tạo nội dung','Hashtag organic'],content:['Mật ngữ + staff đáp = tự nhiên vui, dễ quay','Props chụp hình = content-ready','Quà ngay = động lực đăng bài'],kpi:'500+ UGC videos, 5M+ hashtag views',goal:'Không mua reach. Dựng MÁY TẠO UGC ngay trong nhà hàng.'}
    ],
    trackingFramework:{
      awareness:{
        name:'A. Tracking Awareness',icon:'📢',
        metrics:['Reach + frequency paid social (theo ngày)','Impression OOH theo vị trí billboard','Lượt tìm kiếm "GUNO" trên Google Trends','Volume mention #GunoViNha #GunoFamily','Share of voice mùa Ngày Mẹ vs đối thủ'],
        note:'Tách riêng awareness — đừng nhầm attention với conversion.'
      },
      activation:{
        name:'B. Tracking Activation Haidilao',icon:'🍲',
        metrics:['Số lượt đọc mật ngữ (staff ghi nhận/ngày)','Số bài đăng hợp lệ theo hashtag','Số quà UGC đã phát (theo tier)','Số voucher 50K/100K đã phát','Số bill rơi vào mốc 800K / 1.2M+','Cost per participant','Cost per UGC','Cost per voucher issued'],
        note:'Dashboard quan trọng nhất. Nếu không đo, collab chỉ đẹp về hình ảnh.'
      },
      conversion:{
        name:'C. Tracking Pull-back Conversion',icon:'💰',
        metrics:['Tỷ lệ đổi voucher (theo mã GN-XX, theo điểm)','Doanh thu sinh từ voucher Haidilao','AOV khách từ Haidilao → Guno','SKU bán tốt sau activation','Thời gian đổi voucher trung bình'],
        note:'Phần quan trọng nhất để chứng minh collab tạo doanh thu, không chỉ ảnh đẹp.'
      },
      brandUnderstanding:{
        name:'D. Tracking Brand Understanding',icon:'🧠',
        metrics:['% người nhớ Guno là "đồ bộ gia đình" (survey)','% chỉ nhớ mật ngữ nhưng không biết SP','Sentiment tích cực / tiêu cực / trung lập','Tỷ lệ comment hỏi "Guno là gì?"'],
        note:'Bài học HAPAS: "được nhớ nhưng chưa được hiểu". Phải theo dõi chặt.'
      }
    },
    tvc: {
      name:'TVC "GUNO — Vị Nhà"', duration:'30-60 giây',
      placement:'Billboard + TikTok + Facebook + YouTube',
      scenes:[
        {scene:1,setting:'Phòng khách ấm cúng, sáng sớm',desc:'Gia đình 4 người mặc đồ bộ Guno Family matching — cười nói bên nhau',actor:'Bố mẹ trung tuổi + 2 con trẻ tuổi (KOL gia đình)'},
        {scene:2,setting:'Cổng nhà, buổi sáng',desc:'Cả nhà ra đường mặc áo chống nắng Guno — năng động',actor:'Cùng gia đình (bố mẹ + 2 con)'},
        {scene:3,setting:'Quán cà phê',desc:'Con gái tặng Mẹ set quà Guno — "Yêu Mẹ, tặng GU"',actor:'Con gái trẻ tuổi + Mẹ trung tuổi'},
        {scene:4,setting:'Phòng ngủ',desc:'Chồng tặng vợ bộ đồ Guno — "Yêu vợ, chọn GU"',actor:'Bố mẹ trung tuổi (cặp vợ chồng)'},
        {scene:5,setting:'Haidilao',desc:'Cả nhà đọc mật ngữ "Gia đình là tuyệt vời nhất" — staff đáp "GU GU GUNO!" — vui vẻ nhận quà',actor:'Gia đình 4 người (bố mẹ + 2 con trẻ) + staff Haidilao'},
        {scene:6,setting:'Montage + logo',desc:'Kết: GUNO — Vị Nhà — Gia đình là tuyệt vời nhất — Guno Gu của mọi nhà',actor:'Voice-over + nhạc nền'}
      ],
      budgetBreakdown:[
        {name:'Đạo diễn + Ekip quay (2 ngày)',cost:80000000},
        {name:'Diễn viên gia đình (bố mẹ trung tuổi + 2 con trẻ)',cost:50000000},
        {name:'Location + Đạo cụ + Trang phục',cost:30000000},
        {name:'Hậu kỳ + Color grading + Âm thanh',cost:40000000},
        {name:'Billboard placement HN+HCM (2 tuần)',cost:50000000}
      ],
      totalBudget:250000000,
      productionTimeline:'5 ngày quay dựng + 3 ngày hậu kỳ = hoàn thành trước 5/5',
      products:['Đồ bộ Guno Family matching','Set quà tặng Mẹ','Áo chống nắng Guno','Guno Family Box']
    },
    billboards:[
      {city:'HCM',location:'Ngã tư Nguyễn Huệ — Lê Lợi, Q1',type:'LED 12x6m',weeklyCost:35000000,note:'Đắc địa nhất trung tâm SG, 500K+ lượt view/ngày'},
      {city:'HCM',location:'Vòng xoay Điện Biên Phủ — Hai Bà Trưng',type:'Pano lớn',weeklyCost:20000000,note:'Traffic cao chiều tối'},
      {city:'HN',location:'Ngã tư Phạm Hùng — Tôn Thất Thuyết',type:'LED 10x5m',weeklyCost:25000000,note:'Khu văn phòng + TTTM Vinhomes'},
      {city:'HN',location:'Trần Duy Hưng — Nguyễn Chí Thanh',type:'Billboard lớn',weeklyCost:20000000,note:'Đường chính ra vào nội thành, 400K+ view/ngày'}
    ],
    billboardNote:'Tổng chi phí billboard 1 tuần: 100M (4 vị trí). Nếu chạy 2 tuần = 200M — đã nằm trong quỹ TVC 250M.',
    ugc: {
      hashtags:['#GunoViNha','#GunoFamily','#GuCuaMoiNha','#GiaDinhLaTuyetVoiNhat'],
      challenge:'Cả gia đình mặc Guno + đọc mật ngữ tại Haidilao → Top 10 trúng 1 năm đồ Guno',
      targetVideos:'500-1.000 UGC videos', targetViews:'5-10M views hashtag',
      viralMechanic:'Mật ngữ + Staff đáp "GU GU GUNO!" → UGC tự nhiên → KOL boost → Viral snowball'
    },
    familyBox: {
      name:'Guno Family Box — Limited Edition',
      contents:'1 cặp áo (1 Nam + 1 Nữ) matching design',
      price:'499K - 799K',
      effect:'Quà tặng đa dạng: tặng vợ, tặng mẹ, tặng bạn gái, tặng bạn bè. Tăng AOV, unboxing content tự nhiên'
    },
    kolDetail: {
      megaLive:[
        {name:'Phạm Thoại',event:'Grand Launch 5.5 Shopee',date:'5/5',platform:'Shopee',duration:'6-8h marathon',target:'GMV ≥ 2 tỷ',cost:'Hoa hồng 10% (tính riêng)',linkBST:'Ra mắt BST Guno Family, push Family Box bùng nổ'},
        {name:'Ngọc Trinh',event:'Ngày Gia đình 15/5',date:'15/5',platform:'TikTok Shop',duration:'4h prime time 20:00-24:00',target:'GMV ≥ 2.5 tỷ',cost:'Hoa hồng 10% (tính riêng)',linkBST:'Bán chính BST Guno Family, combo Mẹ-Con, Family Box'}
      ],
      prKol:{
        qty:'3-5 người',followers:'100K — 1M followers',
        contentType:['Review BST Guno Family (try-on + outfit)','Trải nghiệm Haidilao + đọc mật ngữ + staff đáp "GU GU GUNO!"','Quay vlog "Cả nhà mặc Guno đi ăn lẩu"','Story/Reel tặng quà Mẹ bằng Guno'],
        seeding:'PR seeding 2 tuần trước: teaser (20-25/4) → countdown (26-30/4) → launch day review (1/5) → Haidilao wave (10-15/5)',
        budget:'100-200M từ quỹ Branding'
      },
      kocAffiliate:{
        qty:'20-30 người',followers:'10K — 100K followers',
        contentType:['Organic review + unboxing','Mật ngữ challenge video tại Haidilao','"Tặng mẹ Guno" reaction','Family matching OOTD'],
        commission:'Hoa hồng affiliate 10% trên doanh số — tính riêng',
        management:'1 KOL Manager brief + theo dõi content + payout hàng tuần'
      }
    },
    multiBrand:[
      {week:'T1 (10-13/5)',partner:'Haidilao (5 cơ sở)',target:'Mật ngữ → Ritual → UGC → Voucher kéo ngược'},
      {week:'T2 (14-17/5)',partner:'CGV (2 cơ sở)',target:'Gia đình xem phim → voucher Guno 50K'},
      {week:'T3 (18-20/5)',partner:'The Coffee House',target:'Mẹ & con gái cafe → check-in + quà'}
    ]
  },
  pnl: {
    gmv: 50000000000,
    discounts: 0, discountsNote: 'Đã bao gồm trong 30% chi phí sàn + FB',
    returns: 7500000000, returnsNote: 'Hoàn/huỷ đơn ~15%',
    netRevenue: 42500000000,
    cogs: 15575000000, cogsNote: '~31% GMV',
    grossProfit: 26925000000,
    fbAdsCost: 3600000000, fbAdsNote: '30% KPI FB (12 tỷ)',
    platformCost: 11400000000, platformNote: '30% KPI sàn (38 tỷ) — phí sàn, voucher sàn, ads sàn (KHÔNG gồm hoa hồng KOL)',
    kolCommission: 1500000000, kolCommissionNote: 'Hoa hồng KOL/KOC 10% trên GMV affiliate (~15 tỷ GMV KOL) — tính riêng',
    brandingCost: 1000000000, brandingNote: '2% tổng KPI — TVC, Haidilao, Gift, Voucher FB, KOL PR',
    mktCost: 17500000000, mktCostNote: 'FB 3.6 + Sàn 11.4 + KOL 1.5 + Branding 1 = 17.5 tỷ',
    opexCost: 0, opexNote: 'TBD — Tạm tính, sẽ cập nhật sau',
    profitBeforeTax: 9425000000,
    tax: 1885000000,
    netProfit: 7540000000
  },
  taskAssignment: [
    {position:'CMO / Marketing Director',icon:'👔',tasks:['Duyệt TVC + brief sáng tạo','Phê duyệt ngân sách tuần','Review KPI hàng tuần','Quyết định contingency'],deadline:'Xuyên suốt',status:'active'},
    {position:'Performance Ads Manager',icon:'📊',tasks:['Setup campaign 3 kênh (TikTok, Shopee, FB)','Tối ưu ROAS hàng ngày','Báo cáo chi tiêu ads daily','A/B test creatives'],deadline:'1/5 — 31/5',status:'active'},
    {position:'Content Lead',icon:'🎨',tasks:['Brief TVC + duyệt kịch bản','Lịch content 30 ngày (4 video TikTok + 2 Reels/ngày)','Duyệt visual + caption','Coordinate KOC content'],deadline:'20/4 — 31/5',status:'active'},
    {position:'Livestream Manager',icon:'🔴',tasks:['Setup MegaLive Phạm Thoại 5/5','Setup MegaLive Ngọc Trinh 15/5','Quản lý 6 host live daily','Theo dõi GMV live hàng ngày'],deadline:'1/5 — 31/5',status:'active'},
    {position:'KOL Manager',icon:'🤳',tasks:['Book 3-5 KOL PR (100K-1M followers)','Brief content 20-30 KOC affiliate','Theo dõi hoa hồng 10%','Coordinate Haidilao + KOL content'],deadline:'20/4 — 25/5',status:'active'},
    {position:'E-com Manager',icon:'🛒',tasks:['Setup gian hàng 3 sàn','Quản lý đơn hàng + fulfillment','Theo dõi tỉ lệ hoàn đơn ≤15%','Chuẩn bị deal sàn 5.5'],deadline:'25/4 — 31/5',status:'active'},
    {position:'Sales Lead (Facebook)',icon:'💬',tasks:['Quản lý 10 nhân viên sale','Đảm bảo close rate ≥40%','CRM follow-up khách cũ','Phân phối 1.000 voucher FB'],deadline:'1/5 — 31/5',status:'active'},
    {position:'Brand / PR Manager',icon:'📰',tasks:['Điều phối Haidilao 5 cơ sở','Đàm phán CGV 2 cơ sở','PR báo chí + seeding','Quản lý billboard HN+HCM'],deadline:'20/4 — 20/5',status:'active'}
  ],
  kpis: [
    {category:'Doanh thu',name:'GMV tổng',target:'50 tỷ',unit:'VND'},
    {category:'Doanh thu',name:'DT TikTok',target:'26 tỷ',unit:'VND'},
    {category:'Doanh thu',name:'DT Shopee',target:'12 tỷ',unit:'VND'},
    {category:'Doanh thu',name:'DT Facebook',target:'12 tỷ',unit:'VND'},
    {category:'Đơn hàng',name:'Tổng đơn',target:'83.333',unit:'đơn'},
    {category:'Đơn hàng',name:'AOV',target:'600K',unit:'VND'},
    {category:'Đơn hàng',name:'Đơn combo (2+)',target:'≥ 20%',unit:'%'},
    {category:'Đơn hàng',name:'Tỷ lệ hoàn/huỷ đơn',target:'≤ 15%',unit:'%'},
    {category:'Marketing',name:'ROAS tổng',target:'≥ 3.1x',unit:'x'},
    {category:'Marketing',name:'CPO trung bình',target:'≤ 192K',unit:'VND'},
    {category:'Branding',name:'UGC từ Haidilao',target:'500-1.000',unit:'video'},
    {category:'Branding',name:'Hashtag #GunoFamily views',target:'5-10M',unit:'views'},
    {category:'Branding',name:'Brand search tăng',target:'+200-300%',unit:'%'},
    {category:'Livestream',name:'Giờ live TikTok',target:'≥ 400h',unit:'giờ'},
    {category:'Livestream',name:'GMV MegaLive Ngọc Trinh',target:'≥ 2.5 tỷ',unit:'VND'},
    {category:'Livestream',name:'GMV MegaLive Phạm Thoại',target:'≥ 2 tỷ',unit:'VND'},
    {category:'Khách hàng',name:'Khách mới T5',target:'≥ 40.000',unit:'KH'},
    {category:'Khách hàng',name:'Repeat purchase',target:'≥ 25%',unit:'%'}
  ],
  weeklyBudget: [
    {week:'Warm-up (20/4-4/5)',tiktok:800,facebook:400,shopee:300,kol:300,kolComm:100,branding:200,total:2100,revenue:5000,roas:2.4},
    {week:'5/5 Phạm Thoại',tiktok:200,facebook:100,shopee:400,kol:50,kolComm:50,branding:50,total:850,revenue:2500,roas:2.9},
    {week:'6-10/5 Mẹ+Haidilao',tiktok:1200,facebook:600,shopee:500,kol:400,kolComm:300,branding:300,total:3300,revenue:10000,roas:3.0},
    {week:'11-15/5 GĐ+Ngọc Trinh',tiktok:1200,facebook:500,shopee:500,kol:500,kolComm:350,branding:300,total:3350,revenue:9000,roas:2.7},
    {week:'16-20/5 Push Peak',tiktok:1000,facebook:500,shopee:400,kol:400,kolComm:250,branding:200,total:2750,revenue:8000,roas:2.9},
    {week:'21-25/5 Sustain',tiktok:1000,facebook:500,shopee:400,kol:400,kolComm:250,branding:200,total:2750,revenue:9500,roas:3.5},
    {week:'26-31/5 Close',tiktok:800,facebook:500,shopee:400,kol:300,kolComm:200,branding:200,total:2400,revenue:6000,roas:2.5}
  ],
  evaluation: {
    swot:{
      strengths:['Mượn đúng đối tác (Haidilao = gia đình + viral + experience)','Ritual rõ ràng (mật ngữ, staff đáp, props, UGC)','Có funnel thương mại thật (activation, voucher, store conversion)','Đồng bộ OOH, social, live, Haidilao, e-com','2 MegaLive KOL tạo 2 đỉnh doanh thu (5/5 + 15/5)'],
      weaknesses:['Guno chưa phải brand lớn, risk nhớ mật ngữ nhưng không biết bán gì','Activation giới hạn 5 điểm, không scale toàn quốc','Cần lớp content giải thích SP sớm, TRƯỚC activation','Khoảng cách giữa được nhớ và được hiểu (bài học HAPAS)'],
      opportunities:['Ngày Mẹ (11/5) + Ngày Gia đình (28/6) = 2 dịp liên tiếp','UGC engine tại Haidilao, earned media miễn phí','Mã voucher theo điểm, attribution rõ ràng','Retarget người tương tác UGC, chuyển đổi bổ sung'],
      threats:['Đối thủ chạy campaign cùng mùa','Haidilao thay đổi điều kiện hoặc từ chối','Viral nhưng không convert (bài học #1 HAPAS)','Budget 17.5 tỷ vượt cash flow']
    },
    effectiveness:[
      {aspect:'Haidilao Ritual (HAPAS)',score:'5/5',note:'Ritual 5 bước. Cost 150M vs earned media. Voucher kéo ngược.'},
      {aspect:'TVC GU GU GUNO',score:'4/5',note:'Gây tò mò (HAPAS OOH). Không giải thích ngay. Seeding L1.'},
      {aspect:'MegaLive 2 đỉnh',score:'5/5',note:'Phạm Thoại 5/5 + Ngọc Trinh 15/5. 4.5 tỷ GMV.'},
      {aspect:'Seeding 4 lớp',score:'4/5',note:'Tò mò, Giải thích, Traffic, UGC. Decode SP sớm.'},
      {aspect:'Voucher tracking',score:'5/5',note:'Mã theo điểm. Attribution chính xác.'},
      {aspect:'Guno Family Box',score:'4/5',note:'AOV 2-3x. Unboxing content. Quà Ngày Mẹ.'}
    ],
    risks:[
      {risk:'Viral nhưng không convert',prob:'TB',solution:'Seeding L2 decode SP trước activation.'},
      {risk:'Nhớ mật ngữ không biết bán gì',prob:'Cao',solution:'Brand understanding tracking. Content decode 1-7/5.'},
      {risk:'Haidilao từ chối',prob:'TB',solution:'Backup: Coffee House, Gong Cha. Đàm phán sớm.'},
      {risk:'KOL không viral',prob:'TB',solution:'3-5 script mẫu + boost ads. UGC engine bù.'},
      {risk:'Budget vượt cash flow',prob:'TB',solution:'Phân bổ tuần, review weekly, cut 20%.'}
    ],
    hapasLessons:['Mượn đúng đối tác — Haidilao = không gian trải nghiệm','Ritual > Mechanic — trình tự trải nghiệm','Voucher = pull-back tool — kéo traffic ngược','UGC engine nhúng vào trải nghiệm','Đừng để campaign được nhớ nhiều hơn mức brand được hiểu','Mã voucher theo điểm để đo attribution','Lớp content giải thích SP phải chạy TRƯỚC activation'],
    verdict:'HAPAS Framework: 6-phase funnel + Ritual 5 bước + 4 lớp seeding + Voucher tracking. Budget 17.5 tỷ. Rủi ro lớn nhất: viral nhưng không convert — khắc phục bằng Seeding L2 + brand understanding tracking.'
  }
};

// ── STORAGE API ──
function getData() {
  try { const s=localStorage.getItem(DATA_KEY); if(s) return JSON.parse(s); } catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveData(d) { try{localStorage.setItem(DATA_KEY,JSON.stringify(d));return true}catch(e){return false} }
function resetData() { localStorage.removeItem(DATA_KEY); return JSON.parse(JSON.stringify(DEFAULT_DATA)); }

function formatVND(n) {
  if(n>=1e12) return (n/1e12).toFixed(1)+' nghìn tỷ';
  if(n>=1e9) return (n/1e9).toFixed(1).replace('.0','')+' tỷ';
  if(n>=1e6) return (n/1e6).toFixed(0)+'M';
  if(n>=1e3) return (n/1e3).toFixed(0)+'K';
  return n.toLocaleString('vi-VN');
}
function formatVNDFull(n){return n.toLocaleString('vi-VN')+'đ'}
function formatNum(n){return n.toLocaleString('vi-VN')}

// ── DAILY KPI TRACKER ──
const TRACKER_KEY = 'guno_kpi_tracker_v1';
const TRACKER_METRICS = [
  {id:'content_video_tiktok',group:'Content',name:'Video TikTok đăng',unit:'video',dailyTarget:4,monthTarget:120,icon:'📹'},
  {id:'content_video_reels',group:'Content',name:'Reels/FB Video',unit:'video',dailyTarget:2,monthTarget:60,icon:'🎬'},
  {id:'ads_spend_tiktok',group:'Ads',name:'Chi tiêu TikTok Ads',unit:'VND',dailyTarget:140000000,monthTarget:4200000000,icon:'💸',isCurrency:true},
  {id:'ads_spend_fb',group:'Ads',name:'Chi tiêu FB Ads',unit:'VND',dailyTarget:80000000,monthTarget:2400000000,icon:'💸',isCurrency:true},
  {id:'ads_spend_shopee',group:'Ads',name:'Chi tiêu Shopee Ads',unit:'VND',dailyTarget:40000000,monthTarget:1200000000,icon:'💸',isCurrency:true},
  {id:'sales_revenue_total',group:'Doanh thu',name:'Doanh thu tổng',unit:'VND',dailyTarget:1666666667,monthTarget:50000000000,icon:'💰',isCurrency:true},
  {id:'sales_revenue_tiktok',group:'Doanh thu',name:'DT TikTok',unit:'VND',dailyTarget:866666667,monthTarget:26000000000,icon:'♪',isCurrency:true},
  {id:'sales_revenue_shopee',group:'Doanh thu',name:'DT Shopee',unit:'VND',dailyTarget:400000000,monthTarget:12000000000,icon:'🛒',isCurrency:true},
  {id:'sales_revenue_fb',group:'Doanh thu',name:'DT Facebook',unit:'VND',dailyTarget:400000000,monthTarget:12000000000,icon:'f',isCurrency:true},
  {id:'sales_orders',group:'Doanh thu',name:'Số đơn hàng',unit:'đơn',dailyTarget:2778,monthTarget:83333,icon:'📦'},
  {id:'sales_aov',group:'Doanh thu',name:'AOV',unit:'VND',dailyTarget:600000,monthTarget:600000,icon:'🏷️',isCurrency:true,isRate:true},
  {id:'cust_new',group:'Khách hàng',name:'Khách hàng mới',unit:'KH',dailyTarget:1333,monthTarget:40000,icon:'🆕'},
  {id:'live_hours',group:'Livestream',name:'Giờ livestream',unit:'giờ',dailyTarget:13,monthTarget:400,icon:'⏱️'},
  {id:'live_gmv',group:'Livestream',name:'GMV Livestream',unit:'VND',dailyTarget:540000000,monthTarget:16200000000,icon:'💎',isCurrency:true},
  {id:'ugc_videos',group:'Branding',name:'UGC Videos (Haidilao+)',unit:'video',dailyTarget:20,monthTarget:500,icon:'📱'},
  {id:'ugc_hashtag_views',group:'Branding',name:'Hashtag views',unit:'views',dailyTarget:200000,monthTarget:5000000,icon:'#'}
];

function getTrackerData(){try{const s=localStorage.getItem(TRACKER_KEY);if(s)return JSON.parse(s)}catch(e){}return{}}
function saveTrackerData(t){try{localStorage.setItem(TRACKER_KEY,JSON.stringify(t));return true}catch(e){return false}}
function getDayData(d){return getTrackerData()[d]||{}}
function saveDayData(d,v){const t=getTrackerData();t[d]=v;return saveTrackerData(t)}
function getMonthTotal(id){const t=getTrackerData();let s=0;Object.values(t).forEach(d=>{if(d[id])s+=parseFloat(d[id])||0});return s}
function getFilledDays(){return Object.keys(getTrackerData()).sort()}
function getDaysInRange(s,e){const d=[];const a=new Date(s);const b=new Date(e);while(a<=b){d.push(a.toISOString().split('T')[0]);a.setDate(a.getDate()+1)}return d}
