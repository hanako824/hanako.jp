// Nav Plus
;(() => {
  const menuTrigger = document.querySelector('.menu-trigger')

  const navPlus = document.querySelector('.header-nav-plus')

  const navPlusM = document.querySelector('.header-nav-plus-mobile')

  const headerNav = document.querySelector('.header-nav')

  menuTrigger.onclick = () => {

    menuTrigger.classList.toggle('active')

    navPlus.classList.toggle('show')

    navPlusM.classList.toggle('show')

    if(navPlus.classList.length == 2){
      headerNav.style.background = "rgb(70, 70, 70)";
    }else{
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerNav.style.background = "rgb(70, 70, 70)";
      } else {
        headerNav.style.background = "";
      }
    }
  }
})()

// Header toggle
;(() => {
  const toggleA = document.querySelectorAll('.toggleA')

  toggleA.forEach(element => {
    element.onclick = () => {
      const menuTrigger = document.querySelector('.menu-trigger')
    
      const navPlus = document.querySelector('.header-nav-plus')
    
      const navPlusM = document.querySelector('.header-nav-plus-mobile')
    
      const headerNav = document.querySelector('.header-nav')
      
      menuTrigger.classList.toggle('active')
    
      navPlus.classList.toggle('show')
    
      navPlusM.classList.toggle('show')
    
      if(navPlus.classList.length == 2){
        headerNav.style.background = "rgb(70, 70, 70)";
      }else{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          headerNav.style.background = "rgb(70, 70, 70)";
        } else {
          headerNav.style.background = "";
        }
      }
    }
  })
})()

// Scroll Header
;(() => {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

    let headerNav = document.querySelector('.header-nav')

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      headerNav.style.background = "rgb(70, 70, 70)";
    } else {
      headerNav.style.background = "";
    }
  }
})()

// 会社概要
;(() => {
  let companyInfo = document.querySelector('.mid-companyInfo-left')
  let item = document.querySelectorAll('.mid-companyInfo-right-container-item')

  item.forEach(element => {
    element.onclick = ()=>{
      const tab = element.firstElementChild.innerHTML

      const pageTitle = document.querySelector('.page-title')

      if (tab == '株主'){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        pageTitle.innerHTML = '株主'

        companyInfo.innerHTML = `
          <div class="mid-companyInfo-container-item" style="border-top: 1px solid rgba(172, 172, 172, 0.473);">
            <div class="mid-companyInfo-container-left">社名</div>
              <div class="mid-companyInfo-container-right">
                <span>守口市</span><br><br>
                <span>門真市</span><br><br>
                <span>パナソニック株式会社</span><br><br>
                <span>三洋電機株式会社</span><br><br>
                <span>学校法人大阪国際学園</span><br><br>
                <span>学校法人関西医科大学</span><br><br>
                <span>株式会社三菱ＵＦＪ銀行</span><br><br>
                <span>株式会社りそな銀行</span><br><br>
                <span>株式会社京阪百貨店</span><br><br>
                <span>株式会社ジャガータウン</span><br><br>
                <span>守口門真商工会議所</span><br><br>
                <span>FM-HANAKOもりぐち支援会</span><br><br>
                <span>タイガー魔法瓶株式会社</span>
              </div>
            </div>
          `
      }else if(tab == '決算広告'){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        pageTitle.innerHTML = '決算広告'

        companyInfo.innerHTML = `
          <div class="mid-companyInfo-container-item" style="border-top: 1px solid rgba(172, 172, 172, 0.473);">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2021年6月30日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="http://fmhanako.jp/fm-hanako/balancesheet2020.pdf" target="_blank">[(2020年度) 第28期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2020年6月29日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2019年度) 第27期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2019年6月25日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2018年度) 第26期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2018年6月29日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2017年度) 第25期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2017年6月27日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2016年度) 第24期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2016年6月24日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2015年度) 第23期決算公告]</a></div>
          </div>

          <div class="mid-companyInfo-container-item">
            <div class="mid-companyInfo-container-left" style="width: 35%;">2015年6月23日</div>
            <div class="mid-companyInfo-container-right" style="width: 65%;"><a href="" target="_blank">[(2014年度) 第22期決算公告]</a></div>
          </div>
        `
      }else if(tab == '会社概要'){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        pageTitle.innerHTML = '会社概要'

        companyInfo.innerHTML = `
                  <div class="mid-companyInfo-container-item" style="border-top: 1px solid rgba(172, 172, 172, 0.473);">
                      <div class="mid-companyInfo-container-left">社名</div>
                      <div class="mid-companyInfo-container-right">株式会社エフエムもりぐち</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">愛称</div>
                      <div class="mid-companyInfo-container-right">FM-HANAKO(エフエムハナコ)</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">所在地</div>
                      <div class="mid-companyInfo-container-right">
                          <span>本社・演奏所　守口市河原町８番２２号守口文化センター内</span><br>
                          <span>FAX ０６-６９９６-１０８８</span>
                      </div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">送信所</div>
                      <div class="mid-companyInfo-container-right">守口市八雲中町3丁目1番1号 パナソニック㈱本社内</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">資本金</div>
                      <div class="mid-companyInfo-container-right">9,650万円</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">代表者</div>
                      <div class="mid-companyInfo-container-right">代表取締役　竹田　格生</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">設立</div>
                      <div class="mid-companyInfo-container-right">平成5年4月12日</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">開局</div>
                      <div class="mid-companyInfo-container-right">平成5年7月20日</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">コールサイン</div>
                      <div class="mid-companyInfo-container-right">JOZZ7AA-FM</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">周波数</div>
                      <div class="mid-companyInfo-container-right">82.4MHz</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">出力</div>
                      <div class="mid-companyInfo-container-right">10w</div>
                  </div>
                  <div class="mid-companyInfo-container-item">
                      <div class="mid-companyInfo-container-left">事業目的</div>
                      <div class="mid-companyInfo-container-right">
                          <ul style="padding: 0; margin: 0; list-style:circle inside;">
                              <li>放送法による基幹放送事業及び一般放送事業</li>
                              <li>放送番組の企画、制作ならびに販売</li>
                              <li>催事の企画、制作及び運営</li>
                              <li>書籍、雑誌、各種広告宣伝の企画、制作及び出版</li>
                              <li>地域文化の振興に関する業務の受託及び運営</li>
                              <li>情報処理及び情報提供に関するサービス業</li>
                              <li>通信機器の販売及び通信設備の工事の請負</li>
                              <li>前各号に付帯する一切の事業</li>
                          </ul>
                      </div>
                  </div>
              `
      }else if(tab == '聴取可能エリア'){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        pageTitle.innerHTML = '聴取可能エリア'

        companyInfo.innerHTML = `
              <div class="mid-companyInfo-container-item areaFix-item" style="border-top: 1px solid rgba(172, 172, 172, 0.473);">
              <div class="mid-companyInfo-container-left areaFix-left">守口市、門真市をメインターゲットに<br><br>北は、枚方市、高槻市。<br><br>南は、生野区、東大阪市。東は、四条畷市。<br><br>西は、東淀川区、都島区まで。</div>
              <div class="mid-companyInfo-container-right areaFix-right">
                  <img src="./img/area.jpg" />
              </div>
              </div>
              `
      }else if(tab == '個人情報保護基本方針'){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        pageTitle.innerHTML = '個人情報保護基本方針'

        companyInfo.innerHTML = `
              <div class="mid-companyInfo-container-item" style="border-top: 1px solid rgba(172, 172, 172, 0.473);">
                <div class="mid-companyInfo-container-left">個人情報保護基本方針</div>
                <div class="mid-companyInfo-container-right">
                    <span>株式会社エフエムもりぐち（以下「当社」という。）は、聴取者等のプライバシーを尊重し、以下の基本方針にしたがって個人情報の保護を行います。</span><br><br>
                    <span>1. 当社は、聴取者等より個人情報を取得する場合、利用目的をできる限り特定したうえで、必要な範囲の個人情報を取得します。</span><br><br>
                    <span>2. 当社は、聴取者等の個人情報を利用目的の達成に必要な範囲に限定して利用します。この範囲を超えて個人情報を利用する必要が生じた場合には、法令により許される場合を除き、その利用について、聴取者等の同意を得るものとします。</span><br><br>
                    <span>3. 当社は、聴取者等の個人情報を取り扱うにあたり管理責任者を置き、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん及び漏えいなどの予防等、適切な管理に努めます。</span><br><br>
                    <span>4. 当社は、聴取者等の同意を得た場合または法令により許された場合を除き、聴取者等の個人情報を第三者に提供しません。なお、聴取者等の個人情報を第三者に提供する場合には、提供する情報は必要な範囲のみに限定し、提供先に対して契約等により個人情報の管理を義務付けるとともに、適切な監督を行います。</span><br><br>
                    <span>5. 当社は、聴取者等が、自身の個人情報の照会、訂正等を希望される場合には、合理的な範囲で、すみやかに対応します。</span><br><br>
                    <span>6. 当社は、個人情報に関して適用される法令、規範を遵守するとともに、上記の項目における取り組みを適宜見直し、改善していきます。</span><br><br>
                    <span>株式会社エフエムもりぐち</span>
                </div>
              </div>
              `
      }
    }
  });
})()