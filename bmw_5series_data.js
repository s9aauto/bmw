/*!
 * bmw_5series_data.js — BMW 5 Series (F10/F11) 작업시간 데이터
 * 엔진/모델 10종 · 엔진 고유작업 + F10 공통작업(173) 분리 저장
 * 환산: 1 WT = 6분 · 환산분 = WT×6 · 환산시간 = WT÷10 + 0.5
 * 생성일: 2026-06-22
 *
 * ── 구조 ────────────────────────────────────────────────
 *   DATA.common            : F10 전 모델 공통 작업 173건 (22~99 카테고리)
 *   DATA.engines[i].items  : 그 모델 엔진 고유 작업 (11~18 카테고리)
 *   ※ "모델별 전체 작업시간" = 엔진 고유작업 + 공통작업  (아래처럼 합쳐서 사용)
 *
 * ── 사용법 (가장 중요) ───────────────────────────────────
 *   <script src="bmw_5series_data.js"></script>
 *   const DATA = window.BMW_5SERIES_F10;
 *
 *   // 특정 모델의 "전체" 작업 목록 만들기:
 *   const eng  = DATA.engines.find(e => e.model === "520i");
 *   const full = [...eng.items, ...DATA.common];   // ← 엔진 + 공통 합치기
 *
 *   full.forEach(it => {
 *     console.log(it.category, it.code, it.name, it.wt, it.minutes, it.hours);
 *   });
 *
 *   // 화면 출력 예:
 *   const rows = full.map(it =>
 *     `<tr><td>${it.code}</td><td>${it.name}</td>`+
 *     `<td>${it.wt}</td><td>${it.minutes}</td><td>${it.hours}</td></tr>`
 *   ).join("");
 */
(function (root, factory) {
  var data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  root.BMW_5SERIES_F10 = data;
})(typeof self !== "undefined" ? self : this, function () {
  return {
  "series": "F10",
  "generation": "BMW 5 Series (F10/F11)",
  "unit": {
    "wt": "1 WT = 6분",
    "minutes": "환산분 = WT × 6",
    "hours": "환산시간 = WT ÷ 10 + 0.5"
  },
  "updated": "2026-06-22",
  "engineCount": 10,
  "commonCount": 173,
  "note": "모델별 전체 작업 = engines[].items(엔진 고유) + common(F10 공통). 아래 사용법 참고.",
  "common": [
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 001",
      "name": "엔진 우측 마운트 교환",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 011",
      "name": "엔진 좌측 마운트 교환",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 021",
      "name": "엔진 양쪽 마운트 교환",
      "wt": 23,
      "minutes": 138,
      "hours": 2.8,
      "scope": "common"
    },
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 100",
      "name": "엔진 마운팅 브래킷 교체",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 110",
      "name": "좌측 엔진 마운트 브래킷 교체",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "22 엔진마운트와 변속기마운트",
      "code": "22 11 620",
      "name": "양쪽 엔진 마운트 브래킷 교체",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 00 033",
      "name": "자동변속기를 탈장착한다",
      "wt": 52,
      "minutes": 312,
      "hours": 5.7,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 11 514",
      "name": "변속기 오일팬 탈거 및 장착 / 씰링 또는 교체",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 13 015",
      "name": "아웃풋 플랜지의 오일 샤프트씰 교체",
      "wt": 30,
      "minutes": 180,
      "hours": 3.5,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 14 004",
      "name": "실렉터 축용 오일 샤프트씰 교체",
      "wt": 67,
      "minutes": 402,
      "hours": 7.2,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 30 100",
      "name": "오일저장기 탈장착 / 교체",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 31 013",
      "name": "토크 컨버터용 오일 샤프트씰 교체",
      "wt": 56,
      "minutes": 336,
      "hours": 6.1,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 34 022",
      "name": "변속기 하우징의 씰링 슬리브 교환",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 34 564",
      "name": "메카트로닉스 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "24 자동변속기",
      "code": "24 40 014",
      "name": "토크 컨버터 탈장착/교환",
      "wt": 53,
      "minutes": 318,
      "hours": 5.8,
      "scope": "common"
    },
    {
      "category": "26 추진축",
      "code": "26 11 001",
      "name": "추진축 어셈블리 교환",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "26 추진축",
      "code": "26 11 020",
      "name": "센터 마운트 베로즈 교환",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "26 추진축",
      "code": "26 12 001",
      "name": "추진축-센터 마운트 전체 교환",
      "wt": 20,
      "minutes": 120,
      "hours": 2.5,
      "scope": "common"
    },
    {
      "category": "26 추진축",
      "code": "26 12 011",
      "name": "추진축-센터 마운트의 홈 볼 베어링 교환",
      "wt": 20,
      "minutes": 120,
      "hours": 2.5,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 10 001",
      "name": "앞차축 전체 탈장착",
      "wt": 94,
      "minutes": 564,
      "hours": 9.9,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 11 001",
      "name": "앞차축 서포트 교환",
      "wt": 61,
      "minutes": 366,
      "hours": 6.6,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 12 003",
      "name": "우측 컨트롤암 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 12 005",
      "name": "양쪽 아래 컨트롤암 탈장착/교환",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 12 006",
      "name": "양쪽 컨트롤암 탈장착/교환",
      "wt": 17,
      "minutes": 102,
      "hours": 2.2,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 21 000",
      "name": "좌측 또는 우측 스위블 베어링 교환",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 21 005",
      "name": "양쪽 스위블 베어링 교환",
      "wt": 26,
      "minutes": 156,
      "hours": 3.1,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 21 181",
      "name": "앞 휠 베어링 교체",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 31 051",
      "name": "앞 양쪽 스프링 스트럿 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 33 510",
      "name": "앞 양쪽 스프링 스트럿-댐퍼 마운트 베어링 교환",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "31 앞차축/전륜가이드",
      "code": "31 35 000",
      "name": "앞 스태빌라이저 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 00 030",
      "name": "뒤차축 및 앞차축 조정",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 00 150",
      "name": "설계위치까지 적재된 상태에서 키네마틱 진단 시스템 KDS 차륜정렬 실시",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 13 075",
      "name": "전동식 액티브 스티어링휠 기어 탈장착",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 13 577",
      "name": "전동식 액티브 스티어링 기어 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 21 251",
      "name": "좌/우 타이로드 교환",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 31 092",
      "name": "핸들 조절식 스티어링 칼럼 탈장착",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "32 조향장치와 차륜정렬",
      "code": "32 31 093",
      "name": "핸들 조절식 스티어링 칼럼 교환",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 10 011",
      "name": "리어 액슬 캐리어 교환",
      "wt": 28,
      "minutes": 168,
      "hours": 3.3,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 11 760",
      "name": "리어 액슬 캐리어 고정/부싱 작업",
      "wt": 31,
      "minutes": 186,
      "hours": 3.6,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 17 003",
      "name": "후륜 서스펜션 고무 마운트 교체",
      "wt": 32,
      "minutes": 192,
      "hours": 3.7,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 31 011",
      "name": "뒤쪽 액슬축 교환",
      "wt": 41,
      "minutes": 246,
      "hours": 4.6,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 33 111",
      "name": "뒤쪽 액슬캐리어 고무 마운트 모두 교환",
      "wt": 35,
      "minutes": 210,
      "hours": 4.0,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 34 871",
      "name": "리어 액슬 또는 뒤쪽 드라이브샤프트 탈장착/교환",
      "wt": 28,
      "minutes": 168,
      "hours": 3.3,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 41 171",
      "name": "뒤쪽 양쪽 휠 베어링 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 52 370",
      "name": "뒤쪽 양쪽 스프링 스트럿/쇼크업소버 교환",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "33 뒤차축/후륜구동/후륜가이드",
      "code": "33 53 020",
      "name": "뒤쪽 코일 스프링 탈장착/교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 00 019",
      "name": "풋 브레이크 점검",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 00 050",
      "name": "DSC 장착식 브레이크 시스템 공기빼기",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 11 000",
      "name": "앞 양쪽 디스크 브레이크 패드 탈장착/교환",
      "wt": 9,
      "minutes": 54,
      "hours": 1.4,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 11 230",
      "name": "앞/뒤 브레이크 디스크 교환",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 11 560",
      "name": "앞 양쪽 브레이크 캘리퍼 분해수리",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 11 562",
      "name": "앞 양쪽 브레이크 디스크 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 21 296",
      "name": "후방 브레이크 캘리퍼의 양쪽 더스트 슬리브 교체",
      "wt": 12,
      "minutes": 72,
      "hours": 1.7,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 21 320",
      "name": "뒤 양쪽 브레이크 디스크 탈장착/교환",
      "wt": 12,
      "minutes": 72,
      "hours": 1.7,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 32 991",
      "name": "브레이크 호스 모두 교환",
      "wt": 9,
      "minutes": 54,
      "hours": 1.4,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 33 051",
      "name": "브레이크 부스터용 넌리턴 밸브 교환",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 33 505",
      "name": "브레이크 부스터 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 51 527",
      "name": "DSC 유압 유닛 탈거 및 장착/교환",
      "wt": 28,
      "minutes": 168,
      "hours": 3.3,
      "scope": "common"
    },
    {
      "category": "34 브레이크",
      "code": "34 52 516",
      "name": "DSC 컨트롤 유닛 탈장착/교체",
      "wt": 30,
      "minutes": 180,
      "hours": 3.5,
      "scope": "common"
    },
    {
      "category": "35 페달",
      "code": "35 11 000",
      "name": "페달의 마운팅 브래킷 전체 탈장착",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 10 178",
      "name": "앞쪽 및 뒤쪽 휠 동적 밸런싱",
      "wt": 12,
      "minutes": 72,
      "hours": 1.7,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 11 071",
      "name": "4개 휠 교체",
      "wt": 23,
      "minutes": 138,
      "hours": 2.8,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 12 051",
      "name": "타이어 4개 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 12 076",
      "name": "4개 타이어를 런플랫 기술로 교체",
      "wt": 29,
      "minutes": 174,
      "hours": 3.4,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 12 081",
      "name": "모든 휠의 타이어 교환",
      "wt": 25,
      "minutes": 150,
      "hours": 3.0,
      "scope": "common"
    },
    {
      "category": "36 타이어/장착된 휠",
      "code": "36 12 567",
      "name": "앞쪽 또는 뒤쪽 타이어를 림에서 탈거/조립",
      "wt": 25,
      "minutes": 150,
      "hours": 3.0,
      "scope": "common"
    },
    {
      "category": "37 집적식 서스펜션 시스템",
      "code": "37 11 030",
      "name": "앞 좌측 또는 우측 스프링 스트럿 탈장착하기",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "37 집적식 서스펜션 시스템",
      "code": "37 11 031",
      "name": "앞 양쪽 스프링 스트럿 탈거 및 장착",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "37 집적식 서스펜션 시스템",
      "code": "37 11 538",
      "name": "앞 좌측 스프링 스트럿 교환",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "37 집적식 서스펜션 시스템",
      "code": "37 12 001",
      "name": "뒤 양쪽 스프링 스트럿 탈거 및 장착",
      "wt": 17,
      "minutes": 102,
      "hours": 2.2,
      "scope": "common"
    },
    {
      "category": "37 집적식 서스펜션 시스템",
      "code": "37 12 596",
      "name": "뒤 좌측 및 우측 스프링 스트럿 교환",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "41 차체",
      "code": "41 11 071",
      "name": "전방 서포트 관련 차체 수리",
      "wt": 301,
      "minutes": 1806,
      "hours": 30.6,
      "scope": "common"
    },
    {
      "category": "41 차체",
      "code": "41 11 094",
      "name": "전방 양쪽 서포트 관련 차체 수리",
      "wt": 226,
      "minutes": 1356,
      "hours": 23.1,
      "scope": "common"
    },
    {
      "category": "41 차체",
      "code": "41 12 535",
      "name": "트렁크룸 바닥 및 양쪽 사이드멤버 교환",
      "wt": 94,
      "minutes": 564,
      "hours": 9.9,
      "scope": "common"
    },
    {
      "category": "41 차체",
      "code": "41 14 030",
      "name": "좌우측 휠하우스 교환",
      "wt": 208,
      "minutes": 1248,
      "hours": 21.3,
      "scope": "common"
    },
    {
      "category": "41 차체",
      "code": "41 21 004",
      "name": "앞쪽 보강재와 함께 A필러 교환",
      "wt": 241,
      "minutes": 1446,
      "hours": 24.6,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 11 085",
      "name": "앞 범퍼 중앙 브래킷 탈장착하기 / 교환하기",
      "wt": 17,
      "minutes": 102,
      "hours": 2.2,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 11 156",
      "name": "앞 범퍼 트림 탈장착하기",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 11 157",
      "name": "앞 범퍼 트림 교환하기",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 13 116",
      "name": "컨트롤러 관련 몰딩 교환",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 14 000",
      "name": "BMW 엠블럼 탈장착 / 교체",
      "wt": 2,
      "minutes": 12,
      "hours": 0.7,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 16 021",
      "name": "앞쪽 도어 안쪽 사이드미러 탈거 및 장착",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 16 622",
      "name": "앞쪽 도어 우측 사이드미러 교체",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 21 100",
      "name": "프런트 도어의 도어 로크 탈거 및 장착/교체",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 21 127",
      "name": "프런트 도어 잠금 로드 아우터 손잡이 브래킷 탈거 및 장착/교체",
      "wt": 23,
      "minutes": 138,
      "hours": 2.8,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 21 780",
      "name": "좌측 또는 우측 프런트 도어 스틸 탈장착/교체",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 21 801",
      "name": "앞쪽 프런트 도어 스틸 탈장착/교체",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 22 010",
      "name": "양쪽 리어 도어 로크 탈거 및 장착/교체",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 22 127",
      "name": "리어 도어 손잡이 브래킷 탈거 및 장착/교체",
      "wt": 20,
      "minutes": 120,
      "hours": 2.5,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 23 002",
      "name": "트렁크 리드 탈장착/조정하기",
      "wt": 7,
      "minutes": 42,
      "hours": 1.2,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 23 111",
      "name": "보닛 잠금장치 탈장착/교체",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 24 100",
      "name": "트렁크 리드 로크 탈장착/교환",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 24 352",
      "name": "양쪽 트렁크 리드 스프링 탈장착/교환",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 31 011",
      "name": "앞 유리 교환",
      "wt": 38,
      "minutes": 228,
      "hours": 4.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 31 221",
      "name": "뒤 유리 교환",
      "wt": 24,
      "minutes": 144,
      "hours": 2.9,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 32 150",
      "name": "앞 좌측 도어 윈도우 유리 탈장착/교환",
      "wt": 20,
      "minutes": 120,
      "hours": 2.5,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 32 212",
      "name": "앞쪽 우측 도어 윈도우 레귤레이터 탈장착/교체",
      "wt": 27,
      "minutes": 162,
      "hours": 3.2,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 33 004",
      "name": "양쪽 뒷도어 윈도우 레귤레이터 교체",
      "wt": 25,
      "minutes": 150,
      "hours": 3.0,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 34 021",
      "name": "뒷도어 윈도우 관련 유리 탈장착/교환",
      "wt": 28,
      "minutes": 168,
      "hours": 3.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 37 004",
      "name": "좌측 또는 우측 윈도우 레귤레이터 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 44 001",
      "name": "대시보드 탈장착/교환",
      "wt": 38,
      "minutes": 228,
      "hours": 4.3,
      "scope": "common"
    },
    {
      "category": "51 차체 장비",
      "code": "51 45 075",
      "name": "계기판 캐리어 탈장착",
      "wt": 49,
      "minutes": 294,
      "hours": 5.4,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 005",
      "name": "앞쪽 시트 탈장착",
      "wt": 18,
      "minutes": 108,
      "hours": 2.3,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 017",
      "name": "프런트 시트 프레임 탈장착/교체",
      "wt": 26,
      "minutes": 156,
      "hours": 3.1,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 020",
      "name": "전동식 시트 하부 프레임 탈장착/교체",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 028",
      "name": "앞쪽 시트 관련 트림 탈장착/교체",
      "wt": 24,
      "minutes": 144,
      "hours": 2.9,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 303",
      "name": "운전석 시트 커버 교환",
      "wt": 27,
      "minutes": 162,
      "hours": 3.2,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 912",
      "name": "조수석 시트 등받이 커버 교환",
      "wt": 40,
      "minutes": 240,
      "hours": 4.5,
      "scope": "common"
    },
    {
      "category": "52 시트/시트 벤치",
      "code": "52 13 932",
      "name": "프런트 시트 커버 교체",
      "wt": 30,
      "minutes": 180,
      "hours": 3.5,
      "scope": "common"
    },
    {
      "category": "54 선루프/소프트톱",
      "code": "54 12 115",
      "name": "글래스 선루프-커버 탈장착",
      "wt": 7,
      "minutes": 42,
      "hours": 1.2,
      "scope": "common"
    },
    {
      "category": "54 선루프/소프트톱",
      "code": "54 12 117",
      "name": "글래스 선루프-커버용 가스켓 교체",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "54 선루프/소프트톱",
      "code": "54 12 136",
      "name": "글래스 선루프 커버 루프 라이너 탈장착/교체",
      "wt": 9,
      "minutes": 54,
      "hours": 1.4,
      "scope": "common"
    },
    {
      "category": "54 선루프/소프트톱",
      "code": "54 12 197",
      "name": "글래스 디플렉터 베어링 탈장착/교체",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "54 선루프/소프트톱",
      "code": "54 12 499",
      "name": "글래스 선루프 커버 메커니즘 탈장착/교체",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "00 00 000",
      "name": "차량 테스트 실시",
      "wt": 4,
      "minutes": 24,
      "hours": 0.9,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 00 730",
      "name": "모듈구성 프로그래밍/코딩",
      "wt": 4,
      "minutes": 24,
      "hours": 0.9,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 11 235",
      "name": "우측 사이드 뷰 카메라 수리용 케이블 설치",
      "wt": 57,
      "minutes": 342,
      "hours": 6.2,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 11 240",
      "name": "양쪽 사이드 뷰 카메라 수리용 케이블 설치",
      "wt": 70,
      "minutes": 420,
      "hours": 7.5,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 12 207",
      "name": "앞 좌측 시트 와이어링 하니스 교환",
      "wt": 23,
      "minutes": 138,
      "hours": 2.8,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 12 602",
      "name": "앞 배터리 와이어링 하니스 교환",
      "wt": 12,
      "minutes": 72,
      "hours": 1.7,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 13 051",
      "name": "차선변경 경고 컨트롤유닛 교환",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 13 080",
      "name": "주차거리 경보 컨트롤유닛 탈장착",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 21 010",
      "name": "차량 배터리 탈장착",
      "wt": 6,
      "minutes": 36,
      "hours": 1.1,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 31 093",
      "name": "핸들 조절식 스티어링 칼럼 교환",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 31 544",
      "name": "루프 기능 센터 교체",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 31 843",
      "name": "기어선택스위치 교환",
      "wt": 6,
      "minutes": 36,
      "hours": 1.1,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 33 000",
      "name": "양쪽 램프 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 35 005",
      "name": "리모트 액세스 실내 안테나 탈장착/교체",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 35 093",
      "name": "좌측 및 우측 리모트 액세스용 안테나 탈장착/교체",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 35 107",
      "name": "컨트롤박스 탈장착",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 67 581",
      "name": "앞쪽 와이퍼 모터 탈장착/교환",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 67 582",
      "name": "와이퍼 시스템 모터 탈장착/교환",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "61 일반 자동차 전기 시스템",
      "code": "61 67 705",
      "name": "윈드실드 워셔 펌프 탈장착/교환",
      "wt": 14,
      "minutes": 84,
      "hours": 1.9,
      "scope": "common"
    },
    {
      "category": "62 계기",
      "code": "62 11 280",
      "name": "계기판 탈장착",
      "wt": 4,
      "minutes": 24,
      "hours": 0.9,
      "scope": "common"
    },
    {
      "category": "62 계기",
      "code": "62 30 515",
      "name": "헤드업 디스플레이 교환",
      "wt": 44,
      "minutes": 264,
      "hours": 4.9,
      "scope": "common"
    },
    {
      "category": "63 라이트",
      "code": "63 12 020",
      "name": "양쪽 전조등 탈장착",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "63 라이트",
      "code": "63 12 030",
      "name": "좌측 전조등 교환",
      "wt": 27,
      "minutes": 162,
      "hours": 3.2,
      "scope": "common"
    },
    {
      "category": "63 라이트",
      "code": "63 12 147",
      "name": "우측 LED 전조등 교체",
      "wt": 27,
      "minutes": 162,
      "hours": 3.2,
      "scope": "common"
    },
    {
      "category": "63 라이트",
      "code": "63 12 827",
      "name": "양쪽 전조등 교환",
      "wt": 24,
      "minutes": 144,
      "hours": 2.9,
      "scope": "common"
    },
    {
      "category": "63 라이트",
      "code": "63 12 896",
      "name": "양쪽 전조등에서 램프부와 두 컨트롤 유닛 교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 11 545",
      "name": "히터 및 에어컨 유닛을 블로어 하우징 전체 탈장착",
      "wt": 7,
      "minutes": 42,
      "hours": 1.2,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 21 321",
      "name": "히터밸브-열교환기 양쪽 호스 교체",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 31 010",
      "name": "차실내부 환기용 마이크로필터 교환",
      "wt": 5,
      "minutes": 30,
      "hours": 1.0,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 50 010",
      "name": "에어컨에서 흡입해내기, 진공상태로 만들기 그리고 냉매 주입하기",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 51 580",
      "name": "환기용 누유 점검 실시",
      "wt": 15,
      "minutes": 90,
      "hours": 2.0,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 52 523",
      "name": "에어컨 벨트에서 교체하기",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "64 히터/에어컨 장비",
      "code": "64 53 551",
      "name": "에어컨 콘덴서 탈장착/교체",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "65 오디오/내비게이션/정보시스템",
      "code": "65 12 515",
      "name": "오디오/내비게이션 컨트롤 유닛 교환",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "65 오디오/내비게이션/정보시스템",
      "code": "65 13 001",
      "name": "스피커 탈장착/교환",
      "wt": 23,
      "minutes": 138,
      "hours": 2.8,
      "scope": "common"
    },
    {
      "category": "65 오디오/내비게이션/정보시스템",
      "code": "65 13 005",
      "name": "스피커 세트 탈장착/교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "65 오디오/내비게이션/정보시스템",
      "code": "65 50 500",
      "name": "후방카메라 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "66 거리시스템/정속주행장치/마스터키",
      "code": "66 31 560",
      "name": "ACC 센서 탈장착/교환",
      "wt": 13,
      "minutes": 78,
      "hours": 1.8,
      "scope": "common"
    },
    {
      "category": "66 거리시스템/정속주행장치/마스터키",
      "code": "66 31 580",
      "name": "ACC 센서 조정/보정",
      "wt": 7,
      "minutes": 42,
      "hours": 1.2,
      "scope": "common"
    },
    {
      "category": "66 거리시스템/정속주행장치/마스터키",
      "code": "66 31 600",
      "name": "차간거리 제어 센서 탈장착/교환",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 11 520",
      "name": "앞 도어 잠금장치의 양쪽 액추에이터 탈장착/교환",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 11 540",
      "name": "뒤 도어 잠금장치의 양쪽 액추에이터 탈장착/교환",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 16 011",
      "name": "좌측 전조등 조사거리 조절장치 탈장착/교환",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 16 016",
      "name": "우측 전조등 조사거리 조절장치 탈장착/교환",
      "wt": 19,
      "minutes": 114,
      "hours": 2.4,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 61 007",
      "name": "선루프 조작용 구동모터 기어장치 탈장착",
      "wt": 29,
      "minutes": 174,
      "hours": 3.4,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 61 517",
      "name": "선루프 조작용 구동모터 기어장치 교환",
      "wt": 28,
      "minutes": 168,
      "hours": 3.3,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 62 010",
      "name": "앞 윈도우 레귤레이터의 양쪽 콤팩트 모터 탈장착/교환",
      "wt": 25,
      "minutes": 150,
      "hours": 3.0,
      "scope": "common"
    },
    {
      "category": "67 전기식 구동장치",
      "code": "67 62 030",
      "name": "뒤 윈도우 레귤레이터용 콤팩트 모터 양쪽 탈장착/교환",
      "wt": 22,
      "minutes": 132,
      "hours": 2.7,
      "scope": "common"
    },
    {
      "category": "71 엔진/섀시 부품 및 액세서리",
      "code": "71 60 051",
      "name": "트레일러 커플링 어셈블리 탈장착",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "72 차체 구성품/액세서리",
      "code": "72 11 032",
      "name": "앞 양쪽 안전벨트 탈장착/교환",
      "wt": 34,
      "minutes": 204,
      "hours": 3.9,
      "scope": "common"
    },
    {
      "category": "72 차체 구성품/액세서리",
      "code": "72 12 000",
      "name": "동반자석 에어백 모듈 탈장착/교환",
      "wt": 44,
      "minutes": 264,
      "hours": 4.9,
      "scope": "common"
    },
    {
      "category": "72 차체 구성품/액세서리",
      "code": "72 12 001",
      "name": "좌측 또는 우측 머리 에어백 탈장착/교환, SHD 있는 차량",
      "wt": 31,
      "minutes": 186,
      "hours": 3.6,
      "scope": "common"
    },
    {
      "category": "84 통신 시스템",
      "code": "84 10 050",
      "name": "USB 허브 탈장착/교체",
      "wt": 8,
      "minutes": 48,
      "hours": 1.3,
      "scope": "common"
    },
    {
      "category": "84 통신 시스템",
      "code": "84 50 565",
      "name": "블루투스 케이블 안테나 교환",
      "wt": 11,
      "minutes": 66,
      "hours": 1.6,
      "scope": "common"
    },
    {
      "category": "97 차량 보관",
      "code": "97 00 011",
      "name": "자동차 전체의 중공부 방청처리",
      "wt": 16,
      "minutes": 96,
      "hours": 2.1,
      "scope": "common"
    },
    {
      "category": "99 페인팅",
      "code": "51 18 009",
      "name": "전체 제조를 위한 분해작업과 설치작업",
      "wt": 119,
      "minutes": 714,
      "hours": 12.4,
      "scope": "common"
    },
    {
      "category": "99 페인팅",
      "code": "51 18 076",
      "name": "루프도장을 위한 분해작업과 설치작업",
      "wt": 61,
      "minutes": 366,
      "hours": 6.6,
      "scope": "common"
    },
    {
      "category": "99 페인팅",
      "code": "51 18 225",
      "name": "우측 뒤 사이드 패널 제거 및 장착작업시 도장",
      "wt": 21,
      "minutes": 126,
      "hours": 2.6,
      "scope": "common"
    },
    {
      "category": "99 페인팅",
      "code": "51 18 370",
      "name": "트렁크리드 도장을 위한 탈거 및 설치작업",
      "wt": 10,
      "minutes": 60,
      "hours": 1.5,
      "scope": "common"
    }
  ],
  "engines": [
    {
      "key": "B47D20",
      "model": "518d",
      "engine": "B47D20",
      "label": "518d B47D20",
      "engineCount": 100,
      "totalCount": 273,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 030",
          "name": "모든 실린더에서 압축압력 점검",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈,장착",
          "wt": 76,
          "minutes": 456,
          "hours": 8.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 081",
          "name": "엔진 트레이 제거하기",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 분리 및 조립",
          "wt": 220,
          "minutes": 1320,
          "hours": 22.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 000",
          "name": "실린더 헤드 커버 탈장착",
          "wt": 35,
          "minutes": 210,
          "hours": 4.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 101",
          "name": "실린더 헤드 교환",
          "wt": 116,
          "minutes": 696,
          "hours": 12.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 800",
          "name": "실린더 헤드 슬러지/카본 청소",
          "wt": 47,
          "minutes": 282,
          "hours": 5.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 505",
          "name": "오일팬 탈장착, 관련 정도 교체",
          "wt": 31,
          "minutes": 186,
          "hours": 3.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 005",
          "name": "캠 조정유압밸브 교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 270",
          "name": "후방 장착커버 탈장착/교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 198,
          "minutes": 1188,
          "hours": 20.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 600",
          "name": "커넥팅 로드 교환",
          "wt": 121,
          "minutes": 726,
          "hours": 12.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 175,
          "minutes": 1050,
          "hours": 18.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 061",
          "name": "피스톤 하나의 피스톤 핀 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "발전기 구동벨트 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 025",
          "name": "가이드 아이들 구동벨트 리플렉션 롤러 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 520",
          "name": "발전기 구동벨트와 텐셔너 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 560",
          "name": "에어컨 컴프레서 V벨트 텐셔너 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 001",
          "name": "유압식 체인 텐셔너 탈장착/교환",
          "wt": 162,
          "minutes": 972,
          "hours": 16.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "캠축 흡기 타이밍 점검",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "흡기 캠축 탈장착/교환",
          "wt": 56,
          "minutes": 336,
          "hours": 6.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 052",
          "name": "양쪽 타이밍 체인 교환",
          "wt": 170,
          "minutes": 1020,
          "hours": 17.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 090",
          "name": "체인 텐셔너 피스톤 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 540",
          "name": "타이밍 체인 이완 여부 점검 후 체인 텐셔너 고정",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 544",
          "name": "타이밍 체인 이완 여부 점검 후 흡입 타이밍 체인 교체",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 548",
          "name": "타이밍 체인 이완 여부 점검 후 양쪽 타이밍 체인 교체",
          "wt": 178,
          "minutes": 1068,
          "hours": 18.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 100",
          "name": "모든 밸브 스프링 세트 교환",
          "wt": 109,
          "minutes": 654,
          "hours": 11.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 000",
          "name": "오일펌프 탈장착/교환",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 116",
          "name": "오일압력제어용 유압 밸브 탈장착/교체",
          "wt": 27,
          "minutes": 162,
          "hours": 3.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 020",
          "name": "원심식 오일 필터 덮개 탈장착/교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 660",
          "name": "배기 터보차저용 오일 공급라인 제거 및 부착/실링 또는 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 44 500",
          "name": "오일-냉각수 열교환기 탈장착 및 분리/교체",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 000",
          "name": "냉각수 서모스탯 탈장착/교환",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 042",
          "name": "냉각수 호스 일부 탈장착/교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 770",
          "name": "냉각수 호스 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 051",
          "name": "흡기다기관 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 62 070",
          "name": "흡기다기관 온도센서 탈장착/교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 020",
          "name": "배기 터보차저 탈부착/교체",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 505",
          "name": "진단 이후 배기 터보차저 교환 시 추가작업",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 508",
          "name": "배기 터보차저 교환 시 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 000",
          "name": "진공펌프 탈장착/교환",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 010",
          "name": "오일-진공펌프의 진공호스 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 606",
          "name": "변-터빈 밸브 탈장착/교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 100",
          "name": "EGR 냉각기 탈장착/교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 21 520",
          "name": "예열 컨트롤 유닛 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 500",
          "name": "예열 플러그 1개 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 505",
          "name": "예열 플러그 모두 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 000",
          "name": "솔레노이드 스위치 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 (+) 배선 탈장착/교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진룸 와이어링 하니스-부분 배선 교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 010",
          "name": "예열 시스템용 와이어링 하니스-부분 배선 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 245",
          "name": "엔진 접속기 로드 와이어링 하니스 탈장착/교체",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 285",
          "name": "엔진오일 오일레벨 센서 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 51 515",
          "name": "고압펌프 탈장착",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 51 522",
          "name": "유량제어밸브 교체",
          "wt": 27,
          "minutes": 162,
          "hours": 3.2,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 180",
          "name": "압력라인 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 318",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 332",
          "name": "연료공급라인 탈장착/교환",
          "wt": 27,
          "minutes": 162,
          "hours": 3.2,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 560",
          "name": "분사장치 프레셔/어큐뮬레이터의 압력센서 탈장착/교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 570",
          "name": "분사장치의 압력조절기 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 53 710",
          "name": "분사장치의 인젝터 모두 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 54 031",
          "name": "스로틀바디 전체 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 61 050",
          "name": "분사장치의 모든 컨트롤 및 진단 시스템에 입력 - 컨트롤유닛 교체 시에만",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 61 501",
          "name": "컨트롤 유닛 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서를 교체한다",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 534",
          "name": "디젤 미립자 필터용 배기가스 온도센서를 교체한다",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 535",
          "name": "과열방지 센서를 교체한다",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 610",
          "name": "크랭크 센서 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 650",
          "name": "캠축 센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 651",
          "name": "람다-제어센서 교환",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 62 664",
          "name": "람다-감시 센서 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 71 027",
          "name": "흡기튜브 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 71 035",
          "name": "외부공기파이프 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 DDE/연료공급 및 제어",
          "code": "13 72 001",
          "name": "에어컨덕트 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 031",
          "name": "연료탱크 교환",
          "wt": 38,
          "minutes": 228,
          "hours": 4.3,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료공급펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 500",
          "name": "전동식 연료펌프용 컨트롤 유닛 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 001",
          "name": "라디에이터 교체",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 감압/점검",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 018",
          "name": "배기시스템 전체 탈장착 - 디젤 미립자 필터 없는 모델",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착 - 디젤 미립자 필터 있는 모델",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 080",
          "name": "배기구 커버 1개 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 510",
          "name": "뒤 소음기 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 중간 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 030",
          "name": "촉매기 탈장착/교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 080",
          "name": "디젤미립자필터 탈장착/교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 130",
          "name": "계량 유닛 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 160",
          "name": "디젤 미립자 필터/앞 촉매기용 플렉스 파이프 교체",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "N20B20",
      "model": "520i",
      "engine": "N20B20",
      "label": "520i N20B20",
      "engineCount": 73,
      "totalCount": 246,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 030",
          "name": "모든 실린더의 압축압력 점검",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈장착",
          "wt": 89,
          "minutes": 534,
          "hours": 9.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 분해 및 조립",
          "wt": 202,
          "minutes": 1212,
          "hours": 20.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 591",
          "name": "고정 엔진 다루기 작업",
          "wt": 73,
          "minutes": 438,
          "hours": 7.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 000",
          "name": "실린더 헤드 커버 탈장착/교환",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 030",
          "name": "전기 밸브트로닉 제어 및 리프터 제어 탈장착/교환",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 135,
          "minutes": 810,
          "hours": 14.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 163",
          "name": "실린더 헤드 분해 및 조립, 밸브 태핏/시트 점검",
          "wt": 186,
          "minutes": 1116,
          "hours": 19.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 501",
          "name": "실린더 헤드 가스켓 교체",
          "wt": 88,
          "minutes": 528,
          "hours": 9.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 000",
          "name": "오일팬/오일섬프 교환",
          "wt": 58,
          "minutes": 348,
          "hours": 6.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 051",
          "name": "크랭크축 교체",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "엔진마운트 탈장착/교환",
          "wt": 57,
          "minutes": 342,
          "hours": 6.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 211,
          "minutes": 1266,
          "hours": 21.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "실린더 라이닝 점검",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "흡기 밸브 탈장착/교환",
          "wt": 67,
          "minutes": 402,
          "hours": 7.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "배기 밸브 탈장착/교환",
          "wt": 62,
          "minutes": 372,
          "hours": 6.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 029",
          "name": "밸브기어 탈장착/교환",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 351",
          "name": "타이밍 체인 관련 교환",
          "wt": 105,
          "minutes": 630,
          "hours": 11.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 950",
          "name": "타이밍 체인 교환",
          "wt": 57,
          "minutes": 342,
          "hours": 6.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 052",
          "name": "모든 밸브스프링 교환",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 522",
          "name": "모든 밸브가이드 씰 교환",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 38 015",
          "name": "흡기 캠샤프트 관련 작업",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 38 017",
          "name": "흡기 캠샤프트 탈장착/교환",
          "wt": 44,
          "minutes": 264,
          "hours": 4.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 38 025",
          "name": "흡기 캠샤프트 VANOS 관련 탈장착/교환",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 010",
          "name": "오일펌프 체인 모듈 탈장착/교환",
          "wt": 98,
          "minutes": 588,
          "hours": 10.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 105",
          "name": "오일 공급/리턴 라인 탈장착/교환",
          "wt": 53,
          "minutes": 318,
          "hours": 5.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 520",
          "name": "냉각수 서모스탯 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 522",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 900",
          "name": "터보차저 냉각수 라인 탈장착/교체",
          "wt": 53,
          "minutes": 318,
          "hours": 5.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 015",
          "name": "스로틀밸브 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 020",
          "name": "흡기 터보차저 탈장착/교체",
          "wt": 53,
          "minutes": 318,
          "hours": 5.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 310",
          "name": "오버런 리턴파이프 탈장착/교체",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 01 285",
          "name": "엔진오일 오일레벨 센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "흡기 캠샤프트 센서 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 512",
          "name": "배기 캠샤프트 센서 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 003",
          "name": "노크센서 교환, 실린더 3+4",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 548",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "전압 점검",
          "wt": 0,
          "minutes": 0,
          "hours": 0.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타터모터 탈장착/교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 541",
          "name": "엑셀레이터 스위치 교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 235",
          "name": "엔진 센서기능 모듈 1 와이어링 하니스 탈장착/교체",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 245",
          "name": "엔진 단속기 모듈 와이어링 하니스 탈장착/교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 74 507",
          "name": "터보차저 압력변환기 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 610",
          "name": "람다 센서 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 521",
          "name": "크랭크축 센서 교체",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 029",
          "name": "고압펌프 탈장착",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 158",
          "name": "고압레일 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 719",
          "name": "분사장치의 인젝터 모두 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 720",
          "name": "분사장치의 인젝터 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 031",
          "name": "스로틀바디 전체 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 001",
          "name": "에어필터 하우징 전체 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 200",
          "name": "외부 연료필터 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료공급펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 035",
          "name": "팬 슈라우드를 전동식 팬과 함께 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 팬용 팬 슈라우드 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 054",
          "name": "우측 모듈 캐리어 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 22 010",
          "name": "자동변속기용 열교환기 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 000",
          "name": "인터쿨러 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 감압/점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 046",
          "name": "앞 소음기 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 050",
          "name": "촉매변환기 탈거 및 장착/교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "523i_N53B30",
      "model": "523i",
      "engine": "N53B30",
      "label": "523i N53B30",
      "engineCount": 120,
      "totalCount": 293,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 545",
          "name": "모든 실린더 압축압력 점검",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 600",
          "name": "엔진 점검",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 601",
          "name": "크랭크 메커니즘 작업",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 650",
          "name": "엔진 탈장착",
          "wt": 105,
          "minutes": 630,
          "hours": 11.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 01 096",
          "name": "제어 유닛 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 01 551",
          "name": "흡기다기관 교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 06 000",
          "name": "진공펌프 탈장착/교환",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 001",
          "name": "실린더 블록 점검",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 500",
          "name": "실린더 블록",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 001",
          "name": "실린더 헤드 커버 탈장착/교환",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 139,
          "minutes": 834,
          "hours": 14.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 729",
          "name": "실린더 헤드 수평도를 점검한다",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 802",
          "name": "실린더 헤드 부속 작업",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 803",
          "name": "실린더 헤드 분해/수리",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 000",
          "name": "오일 팬 탈장착/교환",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 006",
          "name": "진공펌프 교체",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 010",
          "name": "크랭크샤프트 전방 커버 교체",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 161",
          "name": "크랭크샤프트 교체",
          "wt": 56,
          "minutes": 336,
          "hours": 6.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 601",
          "name": "크랭크샤프트 전저널 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크샤프트 고정",
          "wt": 281,
          "minutes": 1686,
          "hours": 28.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 510",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "피스톤 탈장착/교환",
          "wt": 221,
          "minutes": 1326,
          "hours": 22.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 671",
          "name": "피스톤 링 세트 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "구동벨트 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "비상발전기 V벨트 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 29 020",
          "name": "크랭크축 댐퍼/허브 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "밸브트레인 타이밍 점검",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "흡기 밸브 탈장착/교환",
          "wt": 80,
          "minutes": 480,
          "hours": 8.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "배기 밸브 탈장착/교환",
          "wt": 70,
          "minutes": 420,
          "hours": 7.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 051",
          "name": "타이밍 체인 교환",
          "wt": 81,
          "minutes": 486,
          "hours": 8.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 090",
          "name": "체인 텐셔너 피스톤 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "인입/배기 타이밍을 조정한다",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 050",
          "name": "모든 밸브 탈장착/교환",
          "wt": 81,
          "minutes": 486,
          "hours": 8.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 062",
          "name": "모든 유압식 밸브 간극 보정요소 교체",
          "wt": 83,
          "minutes": 498,
          "hours": 8.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 509",
          "name": "모든 밸브나사 잠금",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 552",
          "name": "모든 밸브틈 탈장착/교환",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 660",
          "name": "모든 밸브 스템 씰 교환",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 715",
          "name": "모든 밸브 스프링 교환",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 008",
          "name": "흡기-제어 유닛 탈장착/교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 017",
          "name": "흡기-제어 유닛 교환",
          "wt": 58,
          "minutes": 348,
          "hours": 6.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 018",
          "name": "배기-제어 유닛 교환",
          "wt": 58,
          "minutes": 348,
          "hours": 6.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 020",
          "name": "흡기-제어 유닛과 배기-제어 유닛 교환",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 044",
          "name": "배기-제어 유닛 탈장착/교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 546",
          "name": "흡기-제어 유닛과 배기-제어 유닛 탈장착/교환",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 652",
          "name": "흡기 솔레노이드 밸브 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 654",
          "name": "배기 솔레노이드 밸브 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 40 000",
          "name": "엔진오일압력 점검",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 000",
          "name": "오일펌프 탈장착/교환",
          "wt": 69,
          "minutes": 414,
          "hours": 7.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 010",
          "name": "오일펌프 체인 모듈 탈장착/교환",
          "wt": 141,
          "minutes": 846,
          "hours": 14.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 515",
          "name": "오일압력제어용 유압 밸브 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 518",
          "name": "오일 밸브 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 020",
          "name": "전류식 오일필터 전체 탈장착/교환",
          "wt": 33,
          "minutes": 198,
          "hours": 3.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 44 000",
          "name": "오일-냉각수-열교환기 탈장착 및 분해하거나 교체",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 000",
          "name": "냉각수 서모스탯 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 700",
          "name": "냉각수 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 756",
          "name": "냉각수 호스 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 775",
          "name": "모든 냉각수 호스 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 082",
          "name": "EGR-밸브에서 파이프 라인 탈장착/교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 085",
          "name": "배기다기관에서 파이프 라인 탈장착/교환",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 01 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "한 개 점화코일 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 612",
          "name": "점화코일 한 개 이상 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 523",
          "name": "흡입공기 온도 센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 524",
          "name": "배출압력 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 531",
          "name": "실린더 모든 압력 센서 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 548",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 600",
          "name": "노크센서 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 650",
          "name": "흡기압 센서 교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 041",
          "name": "솔레노이드 스위치 교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 +/- 배선 탈장착/교체",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 500",
          "name": "캠포지션 와이어링 하니스-부분 배선 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 501",
          "name": "엔진룸 와이어링 하니스-부분 배선 교환",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 512",
          "name": "람다센서(람다 센서1) 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 513",
          "name": "양쪽 람다센서 (람다 센서1) 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 545",
          "name": "양쪽 람다-감시 센서 (람다 센서2) 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 610",
          "name": "람다-감시 센서 (람다 센서2) 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 950",
          "name": "분사장치의 코드 판독 및 진단 시스템에 입력",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 029",
          "name": "모든 밸브라인 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 318",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 594",
          "name": "연료-저압센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 596",
          "name": "연료-고압센서 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 724",
          "name": "추가 분사기 인젝터 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 650",
          "name": "흡기호스 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서 교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 560",
          "name": "공기질량계량기 탈거 및 장착/교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 72 001",
          "name": "에어필터부품 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 90 500",
          "name": "연료탱크 환기 밸브 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 060",
          "name": "연료주입관 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 536",
          "name": "연료환기 여과기(캐니스터) 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 200",
          "name": "외부 연료필터 탈장착/교환하기",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료공급펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 000",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고압회로용 냉각제 배출 및 주입",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 015",
          "name": "보조 라디에이터 탈장착/교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 휠 및 슈라우드 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 046",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 27,
          "minutes": 162,
          "hours": 3.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 509",
          "name": "라디에이터 세척",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 535",
          "name": "휠 슈라우드를 전동식 최고 환기 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 000",
          "name": "배기시스템 랩업/점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 080",
          "name": "배기구 커버 1개 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 11 551",
          "name": "배기다기관 및 전방 배기파이프 사이 압축 실링 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 031",
          "name": "뒤 소음기 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 001",
          "name": "배기관 탈거 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 030",
          "name": "앞쪽 배기다기관 탈부착/교체",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 050",
          "name": "앞 배기다기관 제거 및 설치/교체",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "525d_N47D20",
      "model": "525d",
      "engine": "N47D20",
      "label": "525d N47D20",
      "engineCount": 130,
      "totalCount": 303,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 010",
          "name": "엔진 리스토",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 030",
          "name": "모든 실린더의 압축압력 점검",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈장착",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 091",
          "name": "부동고정식 엔진을 장착한다",
          "wt": 136,
          "minutes": 816,
          "hours": 14.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 091",
          "name": "엔진 설치 마무리 작업",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 091",
          "name": "엔진 보조 시키기",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 본체 및 조립",
          "wt": 200,
          "minutes": 1200,
          "hours": 20.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 01 095",
          "name": "스웰 산소히터 제거 및 탈장착/교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 000",
          "name": "실린더 헤드 커버 탈장착/실링",
          "wt": 36,
          "minutes": 216,
          "hours": 4.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 001",
          "name": "실린더 헤드 커버 교환",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 101",
          "name": "실린더 헤드 교환",
          "wt": 140,
          "minutes": 840,
          "hours": 14.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 101",
          "name": "실린더 헤드 가스켓 교체",
          "wt": 102,
          "minutes": 612,
          "hours": 10.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 154",
          "name": "실린더 헤드 분해와 조립",
          "wt": 140,
          "minutes": 840,
          "hours": 14.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 720",
          "name": "실린더 헤드의 수밀도 점검",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 900",
          "name": "실린더 헤드 흡기포트와 흡기다기관 청소",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 901",
          "name": "실린더 헤드 흡기 덕트 및 흡기 매니폴드 청소 후 매니폴드 교체",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 902",
          "name": "실린더 헤드 흡기 덕트 청소 및 매니폴드 교체",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 000",
          "name": "오일팬 탈장착/실링 또는 교환",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 005",
          "name": "앞 크랭크축실 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 110",
          "name": "하단 타이밍 케이스 커버 탈장착/실링 또는 교체",
          "wt": 155,
          "minutes": 930,
          "hours": 16.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 151",
          "name": "크랭크축실 교체",
          "wt": 48,
          "minutes": 288,
          "hours": 5.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 209,
          "minutes": 1254,
          "hours": 21.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 47,
          "minutes": 282,
          "hours": 5.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 513",
          "name": "플라이휠 플레이트를 클러치 어댑터 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 167,
          "minutes": 1002,
          "hours": 17.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 071",
          "name": "모든 피스톤의 피스톤 링 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 651",
          "name": "피스톤 하나의 피스톤 링 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 000",
          "name": "에어컨 컴프레서 V벨트 텐셔너 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "발전기 구동벨트 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 000",
          "name": "체인 텐셔너 레일 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "캠축(흡)의 타이밍 점검",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "양쪽 캠축 탈장착/교환",
          "wt": 55,
          "minutes": 330,
          "hours": 6.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "흡기 캠축 탈장착/교환",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 028",
          "name": "배기 캠축 탈장착/교환",
          "wt": 49,
          "minutes": 294,
          "hours": 5.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 500",
          "name": "양쪽 타이밍 체인 교환",
          "wt": 121,
          "minutes": 726,
          "hours": 12.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "캠축(흡)의 타이밍을 조정한다",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "여러 타이밍 체인 및 가이드 레일 교체",
          "wt": 89,
          "minutes": 534,
          "hours": 9.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "타이밍 체인 인장 여부 점검 및 체인 텐셔너 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 544",
          "name": "타이밍 체인 이완 여부 점검 및 체인 교체",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 549",
          "name": "타이밍 체인 이완 여부 점검 및 타이밍 체인 교체",
          "wt": 127,
          "minutes": 762,
          "hours": 13.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 000",
          "name": "로커 암 탈장착/교환",
          "wt": 52,
          "minutes": 312,
          "hours": 5.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 100",
          "name": "모든 밸브 스프링 교환",
          "wt": 131,
          "minutes": 786,
          "hours": 13.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 40 000",
          "name": "엔진오일압 점검",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 000",
          "name": "오일펌프 탈장착/교환",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 020",
          "name": "전륜식 오일 필터 전체 탈장착/교환",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 235",
          "name": "저압 배기 터보차저용 오일 공급라인 제거 및 설치/실링 또는 교체",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 240",
          "name": "고압 배기 터보차저용 오일 리턴라인 설치 및 제거/실링 또는 교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 245",
          "name": "저압 배기 터보차저 오일 리턴라인 탈장착/실링 또는 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 290",
          "name": "고압 배기 터보차저용 오일 공급라인 탈장착/실링 또는 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 43 000",
          "name": "오일 릴리스 가이드 라인 탈장착/실링",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 44 000",
          "name": "오일-냉각수 열교환기 탈장착 및 실링 또는 교체",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 000",
          "name": "냉각수 서모스탯 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 775",
          "name": "냉각수 호스 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 551",
          "name": "흡기관 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 042",
          "name": "냉각수 라인 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 040",
          "name": "고압 배기 터보차저 탈장착/교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 045",
          "name": "저압 배기 터보차저 탈장착/교체",
          "wt": 61,
          "minutes": 366,
          "hours": 6.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 070",
          "name": "터보차저 탈장착/교환",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 507",
          "name": "고압 배기 터보차저 교환 시 추가작업",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 508",
          "name": "배기 터보차저 교환 시 흡입라인 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 720",
          "name": "엔진 마운트 탈장착/교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 000",
          "name": "진공펌프 탈장착/교환",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 100",
          "name": "EGR-냉각기 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 21 520",
          "name": "예열 컨트롤 유닛 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 000",
          "name": "모든 예열 플러그 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 500",
          "name": "예열 플러그 1개 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 505",
          "name": "예열 플러그 모두 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 521",
          "name": "발전기 교환",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 041",
          "name": "솔레노이드 스위치 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 플러스 배선 탈장착/교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진룸 와이어링 하니스-부분 배선 교환",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 010",
          "name": "예열 시스템용 와이어링 하니스-부분 배선 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 200",
          "name": "인젝터용 와이어링 하니스-부분 배선 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 025",
          "name": "연료리턴압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 028",
          "name": "연료공급압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 004",
          "name": "고압펌프 탈장착",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 158",
          "name": "고압라인 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 170",
          "name": "모든 압력라인 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 180",
          "name": "압력라인 교환",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 332",
          "name": "연료공급라인 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 560",
          "name": "분사장치 플러셔 어큐뮬레이터 압력센서 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 570",
          "name": "분사장치의 압력조절기 교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 851",
          "name": "연료압력 온도센서 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 030",
          "name": "스로틀바디 탈장착/실링",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 501",
          "name": "컨트롤 유닛 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 600",
          "name": "서비스 인젝터 또는 컨트롤유닛 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 950",
          "name": "분사장치 코드 판독 및 진단 시스템 입력",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 534",
          "name": "디젤 미립자 필터용 배기가스 온도센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 535",
          "name": "과급압센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 538",
          "name": "과급 공기온도 센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 585",
          "name": "배기시스템 압력센서 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 610",
          "name": "흡입온도 센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 650",
          "name": "압력센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 651",
          "name": "람다-제어센서 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 027",
          "name": "흡기통로 탈장착/교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 035",
          "name": "외부공기파이프 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 060",
          "name": "연료주입관 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료필터 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 900",
          "name": "확장된 냉각시스템 환기 루틴 실시",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 035",
          "name": "팬 슈라우드를 전동식 휀과 함께 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 팬 슈라우드 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 046",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 000",
          "name": "인터쿨러 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 점검/조절",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 000",
          "name": "배기구 커버 1개 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 031",
          "name": "뒤 소음기 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 630",
          "name": "앞파이프 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 중간 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 080",
          "name": "디젤미립자필터 탈장착/교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 160",
          "name": "디젤 미립자 필터/앞 촉매기용 플렉스 파이프 교체",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 900",
          "name": "미립자 필터 교환 시 추가작업",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "530d_N57D30",
      "model": "530d",
      "engine": "N57D30",
      "label": "530d N57D30",
      "engineCount": 103,
      "totalCount": 276,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 030",
          "name": "모든 실린더의 압축압력 점검",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈장착",
          "wt": 81,
          "minutes": 486,
          "hours": 8.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 070",
          "name": "엔진을 엔진거치대에 고정시키다",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 분해 및 조립",
          "wt": 249,
          "minutes": 1494,
          "hours": 25.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 501",
          "name": "교체 관련 마무리 작업",
          "wt": 82,
          "minutes": 492,
          "hours": 8.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 601",
          "name": "부분교환식 엔진을 장착한다",
          "wt": 163,
          "minutes": 978,
          "hours": 16.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 000",
          "name": "실린더 헤드 커버 탈장착/교환",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 94,
          "minutes": 564,
          "hours": 9.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 154",
          "name": "실린더 헤드 분해와 조립",
          "wt": 132,
          "minutes": 792,
          "hours": 13.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 161",
          "name": "실린더 헤드 고정",
          "wt": 132,
          "minutes": 792,
          "hours": 13.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 601",
          "name": "실린더 헤드 커버 교환",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 601",
          "name": "실린더 헤드 흡기덕트 및 흡기 매니폴드 청소",
          "wt": 62,
          "minutes": 372,
          "hours": 6.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 605",
          "name": "밸브 가이드 관련 작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 720",
          "name": "실린더 압축압력 테스트 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 802",
          "name": "실린더 헤드 흡기덕트 청소 및 매니폴드 교체",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 600",
          "name": "조절캠 탈장착, 분해 또는 교환",
          "wt": 80,
          "minutes": 480,
          "hours": 8.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 005",
          "name": "캠 관련 유닛 교체",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 110",
          "name": "하단 타이밍 케이스 커버 탈장착/대체 또는 교체",
          "wt": 153,
          "minutes": 918,
          "hours": 15.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 151",
          "name": "캠샤프트 교체",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 401",
          "name": "크랭크축 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 249,
          "minutes": 1494,
          "hours": 25.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 513",
          "name": "플렉스디스크/플라이휠 관련 고정",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 174,
          "minutes": 1044,
          "hours": 17.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 651",
          "name": "피스톤 하나와 피스톤 링 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 971",
          "name": "모든 피스톤의 피스톤 링 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "발전기 구동벨트 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 29 020",
          "name": "발전기 구동벨트용 텐셔너 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 29 090",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 001",
          "name": "유압식 체인 텐셔너 탈장착/교환",
          "wt": 153,
          "minutes": 918,
          "hours": 15.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "흡입 타이밍 조정",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 006",
          "name": "캠축 타이밍 점검",
          "wt": 48,
          "minutes": 288,
          "hours": 5.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "양쪽 캠축 탈장착/교환",
          "wt": 65,
          "minutes": 390,
          "hours": 7.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "흡기 캠축 탈장착/교환",
          "wt": 57,
          "minutes": 342,
          "hours": 6.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 052",
          "name": "양쪽 타이밍 체인 교환",
          "wt": 153,
          "minutes": 918,
          "hours": 15.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 090",
          "name": "기밀 관련 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 544",
          "name": "타이밍 체인 점검 및 교정",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 090",
          "name": "로커암 관련 탈장착/교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 21 520",
          "name": "예열 컨트롤 유닛 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 000",
          "name": "모든 예열 플러그 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 500",
          "name": "예열 플러그 1개 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 505",
          "name": "예열 플러그 모두 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 32 501",
          "name": "솔레노이드 스위치 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 (+) 배선 탈장착/교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진용 와이어링 하니스-부분 배선 교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 010",
          "name": "에어 시스템용 와이어링 하니스-부분 배선 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 200",
          "name": "인젝터용 와이어링 하니스-부분 배선 교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 285",
          "name": "엔진오일의 오일레벨 센서 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 01 050",
          "name": "분사장치의 코드 판독 및 진단 시스템에 입력",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 01 050",
          "name": "전기식 디젤 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 01 501",
          "name": "컨트롤 유닛 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 505",
          "name": "배기 터보차저 및 배기가스 배압센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 505",
          "name": "터빈차압 압력센서 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 531",
          "name": "냉각수 온도센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 534",
          "name": "디젤 미립자 필터용 배기가스 온도센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 535",
          "name": "과급압력 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 560",
          "name": "공기량측정기 탈거 및 장착/교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 602",
          "name": "배기가스 온도센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 610",
          "name": "흡입공기온도 센서 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 650",
          "name": "냉각 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 651",
          "name": "흡입 게이지에서 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 025",
          "name": "연료레일압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 028",
          "name": "연료펌프압력을 점검한다",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 004",
          "name": "고압펌프 탈장착",
          "wt": 31,
          "minutes": 186,
          "hours": 3.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 158",
          "name": "고압라인 탈장착/교환",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 332",
          "name": "연료필터라인 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 555",
          "name": "분사장치의 드라이브 어큐뮬레이터 탈장착/교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 030",
          "name": "스로틀바디 탈장착/설치",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 091",
          "name": "연료 압력 솔레노이드 교환하기",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 170",
          "name": "모든 인젝터의 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 570",
          "name": "분사장치의 압력조절기 교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 600",
          "name": "분사장치 쪽에서 어큐뮬레이터의 압력센서 탈장착/교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 710",
          "name": "분사장치의 인젝터 보수 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 027",
          "name": "흡기통로 탈장착/교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 035",
          "name": "외부공기파이프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 72 001",
          "name": "에어필터부품 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료필터 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 000",
          "name": "배기시스템 탈거/설치",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 031",
          "name": "뒤 소음기 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 080",
          "name": "배기구 커버 1개 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 100",
          "name": "중간 파이프 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 590",
          "name": "중간 소음기 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 001",
          "name": "배기관 플랩 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 030",
          "name": "촉매기 탈장착/교체",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 080",
          "name": "디젤미립자필터 탈장착/교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 900",
          "name": "미립자 필터 교환 시 추가작업",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 040",
          "name": "배기 다기관 탈장착/교체",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "N55B30",
      "model": "535i",
      "engine": "N55B30",
      "label": "535i N55B30",
      "engineCount": 156,
      "totalCount": 329,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 010",
          "name": "엔진 오일 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 045",
          "name": "모든 실린더 압축 압력 측정",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈장착",
          "wt": 102,
          "minutes": 612,
          "hours": 10.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 080",
          "name": "엔진 테스트",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 분해 및 조립",
          "wt": 286,
          "minutes": 1716,
          "hours": 29.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 461",
          "name": "엔진 오일 제거",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 981",
          "name": "크랭크축 관련 작업",
          "wt": 42,
          "minutes": 252,
          "hours": 4.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 001",
          "name": "실린더 손상진단 엔드스코프 이용",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 600",
          "name": "실린더 헤드 관련 작업",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 040",
          "name": "전체 실린더헤드 커버 및 인젝터 커버 탈장착/교환",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 070",
          "name": "리프팅 관련 작업",
          "wt": 61,
          "minutes": 366,
          "hours": 6.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 076",
          "name": "밸브 관련 작업",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 175,
          "minutes": 1050,
          "hours": 18.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 103",
          "name": "실린더 헤드 탈거 및 분해, 밸브 시트 관련 작업",
          "wt": 220,
          "minutes": 1320,
          "hours": 22.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 161",
          "name": "실린더 헤드 고정",
          "wt": 177,
          "minutes": 1062,
          "hours": 18.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 560",
          "name": "실린더 헤드 탈장착 단독 탈거",
          "wt": 74,
          "minutes": 444,
          "hours": 7.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 652",
          "name": "실린더 헤드 컴플리트 조립",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 657",
          "name": "모든 밸브시트 교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 667",
          "name": "밸브시트 1개 터닝",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 720",
          "name": "실린더 헤드 관련 추가작업",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 902",
          "name": "실린더 헤드 탈거 및 분해, 밸브 시트 연마",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 965",
          "name": "밸브가이드 1개 점검",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 050",
          "name": "오일 팬 탈장착/교환 또는 고정",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 010",
          "name": "워터 관련 부품 교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 015",
          "name": "오일 펌프 관련 커버 탈장착/교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 056",
          "name": "크랭크축 씰 교체",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 16 140",
          "name": "엔진 오일 서모스탯 관련 작업",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 286,
          "minutes": 1716,
          "hours": 29.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 960",
          "name": "플라이휠 교환",
          "wt": 185,
          "minutes": 1110,
          "hours": 19.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 080",
          "name": "플라이휠 탈장착/교환",
          "wt": 83,
          "minutes": 498,
          "hours": 8.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 080",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 227,
          "minutes": 1362,
          "hours": 23.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 530",
          "name": "모든 피스톤 탈장착/교환 단독 탈거",
          "wt": 126,
          "minutes": 756,
          "hours": 13.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 26 061",
          "name": "피스톤 링세트 1개 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 26 071",
          "name": "모든 피스톤 링세트 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "냉각기 구동벨트 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 025",
          "name": "제너레이터 구동벨트 댐핑 풀리 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 020",
          "name": "캠축 관련 탈장착/교환",
          "wt": 85,
          "minutes": 510,
          "hours": 9.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "흡기 캠축 탈장착/교환",
          "wt": 101,
          "minutes": 606,
          "hours": 10.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 041",
          "name": "타이밍 체인 교환",
          "wt": 74,
          "minutes": 444,
          "hours": 7.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 060",
          "name": "흡입 캠축 타이밍 점검",
          "wt": 48,
          "minutes": 288,
          "hours": 5.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 082",
          "name": "모든 흡입 밸브 관련 작업",
          "wt": 56,
          "minutes": 336,
          "hours": 6.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 090",
          "name": "모든 흡기 밸브 탈장착/교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 092",
          "name": "흡기 측 밸브 탈장착/교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 815",
          "name": "흡기 측 밸브 관련 작업",
          "wt": 65,
          "minutes": 390,
          "hours": 7.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 000",
          "name": "모든 밸브 스프링 교환",
          "wt": 87,
          "minutes": 522,
          "hours": 9.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 009",
          "name": "모든 밸브 탈장착/교환",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 140",
          "name": "밸브 리프팅 레버 교환",
          "wt": 87,
          "minutes": 522,
          "hours": 9.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 602",
          "name": "모든 밸브 스프링 교환 단독 작업",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 009",
          "name": "편심축 탈장착/교환",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 010",
          "name": "밸브트로닉 관련 탈장착/교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 021",
          "name": "편심축 모듈 교환",
          "wt": 47,
          "minutes": 282,
          "hours": 5.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 050",
          "name": "편심축 관련 탈장착/교환",
          "wt": 49,
          "minutes": 294,
          "hours": 5.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 532",
          "name": "편심축 커버 교환",
          "wt": 47,
          "minutes": 282,
          "hours": 5.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 39 010",
          "name": "흡기-배기 유닛 탈장착/교환",
          "wt": 65,
          "minutes": 390,
          "hours": 7.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 39 030",
          "name": "흡기-배기 유닛 고정",
          "wt": 61,
          "minutes": 366,
          "hours": 6.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 39 052",
          "name": "흡기 솔레노이드 밸브 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 39 655",
          "name": "배기 솔레노이드 밸브 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 39 819",
          "name": "흡기-배기 유닛 교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 40 000",
          "name": "엔진오일 압력 점검",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 115",
          "name": "오일필터하우징 유닛 밸브 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 601",
          "name": "오일펌프 탈장착/교환",
          "wt": 67,
          "minutes": 402,
          "hours": 7.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 818",
          "name": "유압 밸브 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 002",
          "name": "오일 쿨러 밸브 연결 탈장착/교환",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 109",
          "name": "오일 쿨러라인 커버 및 부속품 관련 작업",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 210",
          "name": "오일 라인 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 825",
          "name": "오일필터 라인 탈장착 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 44 002",
          "name": "서모스탯 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 44 825",
          "name": "냉각라인 탈장착 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 204",
          "name": "냉각수 펌프 탈장착/교체 조건 작업",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 002",
          "name": "냉각수 서모스탯 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 000",
          "name": "흡기라인 탈장착",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 395",
          "name": "흡입 공기량계 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 531",
          "name": "흡기라인 고정",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 898",
          "name": "흡입 공기량계 탈장착/교환 조건 작업",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 002",
          "name": "흡기 매니폴드 탈장착/교체",
          "wt": 31,
          "minutes": 186,
          "hours": 3.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 009",
          "name": "흡기-연료냉각기 냉각수 라인 탈장착/교체",
          "wt": 31,
          "minutes": 186,
          "hours": 3.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 63 747",
          "name": "냉각수 호스 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 000",
          "name": "흡기-연료냉각기 탈장착/교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 010",
          "name": "과급 압력 관련 밸브 탈장착/교환",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 999",
          "name": "스로틀 밸브/센서 관련 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 000",
          "name": "진공펌프 탈장착/교환",
          "wt": 38,
          "minutes": 228,
          "hours": 4.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 037",
          "name": "배기/터보 관련 압력 부품 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 74 507",
          "name": "터보 과급기의 압력변환기 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 78 010",
          "name": "람다센서 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 78 010",
          "name": "NOx 센서 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 78 610",
          "name": "람다-감시 센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 522",
          "name": "모든 점화 플러그 탈장착/교환 점화코일 탈거 상태",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "점화코일 1개 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 512",
          "name": "점화코일 1개 이상 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 521",
          "name": "크랭크축 센서 교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 523",
          "name": "흡입밸브 캠축 센서 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 524",
          "name": "배출밸브 캠축 센서 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 531",
          "name": "캠축 배출 센서 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 548",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 550",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 32 501",
          "name": "발전기용 벨트 풀리 교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 플러스 배선 탈장착/교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진룸 와이어링 하니스 부분 배선 교환",
          "wt": 39,
          "minutes": 234,
          "hours": 4.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 100",
          "name": "점화코일용 와이어링 하니스 부분 배선 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 285",
          "name": "엔진오일 오일레벨 센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 586",
          "name": "오일압력 센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 63 586",
          "name": "파워 디스트리뷰션 모듈 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 029",
          "name": "연료공급펌프 공급압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 017",
          "name": "고압펌프 탈장착",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 158",
          "name": "고압레일 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 170",
          "name": "모든 압력라인 교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 318",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 719",
          "name": "분사장치의 인젝터 모두 교환",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 720",
          "name": "분사장치의 인젝터 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 724",
          "name": "추가 낱개 인젝터 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 030",
          "name": "스로틀바디 탈장착/설정",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 592",
          "name": "오일온도 센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 686",
          "name": "진공펌프 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 180",
          "name": "에어덕트 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 570",
          "name": "에어덕트 탈장착/교환 / 터보차저 앞 외부공기 파이프",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 72 001",
          "name": "에어필터부품 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 90 500",
          "name": "연료탱크 환기 밸브 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료 레벨 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 510",
          "name": "활성탄 여과기 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 600",
          "name": "연료공급계통 연료 유입부 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 610",
          "name": "연료공급라인 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 015",
          "name": "보조 라디에이터 탈장착/교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 휀용 휠 슈라우드 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 040",
          "name": "서모스탯 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 046",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 050",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 509",
          "name": "라디에이터 세척",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 535",
          "name": "휠 슈라우드 전동식 휀과 함께 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 21 200",
          "name": "엔진오일 쿨러 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 000",
          "name": "인터쿨러 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 갈압/점검",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 521",
          "name": "배기시스템 전체 교체 / 머플러 탈거 상태",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 525",
          "name": "배기시스템 전체 교체",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 580",
          "name": "배기구 커버 1개 교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 620",
          "name": "배기파이프 1개 속소",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 031",
          "name": "뒤 소음기 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 034",
          "name": "뒤 투 소음기 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 550",
          "name": "중간 소음기 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 050",
          "name": "촉매변환기 탈거 및 장착/교체",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "535d_N57B30",
      "model": "535d",
      "engine": "N57B30",
      "label": "535d N57B30",
      "engineCount": 134,
      "totalCount": 307,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 009",
          "name": "엔진 테스트",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 030",
          "name": "모든 실린더 압축압력 점검",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "진공 탈거/장착",
          "wt": 97,
          "minutes": 582,
          "hours": 10.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 081",
          "name": "엔진 번호 새기기",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 091",
          "name": "크랭크축 씰링링 장착",
          "wt": 188,
          "minutes": 1128,
          "hours": 19.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 탈거 및 조립",
          "wt": 274,
          "minutes": 1644,
          "hours": 27.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 591",
          "name": "크랭크축 씰링링 교환",
          "wt": 80,
          "minutes": 480,
          "hours": 8.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 000",
          "name": "실린더 헤드 커버 탈장착/교환",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 001",
          "name": "실린더 헤드 커버 교환",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 135,
          "minutes": 810,
          "hours": 14.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 101",
          "name": "실린더 헤드 교환",
          "wt": 172,
          "minutes": 1032,
          "hours": 17.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 121",
          "name": "실린더 헤드가스켓 교체",
          "wt": 135,
          "minutes": 810,
          "hours": 14.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 154",
          "name": "실린더 헤드 씰링링 조립",
          "wt": 172,
          "minutes": 1032,
          "hours": 17.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 720",
          "name": "실린더 헤드 서포트 조립",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 800",
          "name": "실린더 헤드 흡기덕트와 흡기다기관 탈착",
          "wt": 57,
          "minutes": 342,
          "hours": 6.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 801",
          "name": "실린더 헤드 흡기덕트 탈착 후 매니폴드 교체",
          "wt": 57,
          "minutes": 342,
          "hours": 6.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 802",
          "name": "실린더 헤드 흡기덕트 탈착 및 매니폴드 교체",
          "wt": 53,
          "minutes": 318,
          "hours": 5.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 000",
          "name": "오일팬 탈장착/씰링 또는 교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 161",
          "name": "크랭크축 씰 교체",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 274,
          "minutes": 1644,
          "hours": 27.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 63,
          "minutes": 378,
          "hours": 6.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "오일 피스톤 탈장착/교환",
          "wt": 215,
          "minutes": 1290,
          "hours": 22.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 051",
          "name": "피스톤 하나의 피스톤 링 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 071",
          "name": "모든 피스톤의 피스톤 링 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 020",
          "name": "발전기 구동벨트용 텐셔너 교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 080",
          "name": "에어컨 컴프레서 V벨트 텐셔너 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 516",
          "name": "파워 스티어링 펌프 구동벨트 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 001",
          "name": "유압식 체인 텐셔너 탈장착/교환",
          "wt": 190,
          "minutes": 1140,
          "hours": 19.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "흡입 타이밍 점검",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "흡입 타이밍 조정",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "양쪽 캠축 탈장착/교환",
          "wt": 60,
          "minutes": 360,
          "hours": 6.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 025",
          "name": "흡기 캠축 탈장착/교환",
          "wt": 54,
          "minutes": 324,
          "hours": 5.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 028",
          "name": "배기 캠축 탈장착/교환",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 052",
          "name": "양쪽 타이밍 체인 교환",
          "wt": 194,
          "minutes": 1164,
          "hours": 19.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 090",
          "name": "체인 텐셔너 피스톤 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 544",
          "name": "타이밍 체인 이완 점검 및 타이밍 체인 교체",
          "wt": 55,
          "minutes": 330,
          "hours": 6.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 062",
          "name": "모든 유압식 밸브 간극 보정요소 교체",
          "wt": 62,
          "minutes": 372,
          "hours": 6.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 650",
          "name": "모든 핑거 탈장착/교환",
          "wt": 59,
          "minutes": 354,
          "hours": 6.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 055",
          "name": "모든 밸브 스프링 교환",
          "wt": 161,
          "minutes": 966,
          "hours": 16.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 190",
          "name": "모든 밸브 스템 씰 교환",
          "wt": 159,
          "minutes": 954,
          "hours": 16.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 500",
          "name": "모든 밸브 누설 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 40 000",
          "name": "엔진오일압력 점검",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 000",
          "name": "오일펌프 탈장착/교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 020",
          "name": "오일 쿨러 전체 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 200",
          "name": "배기 터보차저용 오일 공급라인 제거 및 부착/씰링 또는 교체",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 210",
          "name": "배기 터보차저 오일 리턴 라인 탈장착/씰링 또는 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 000",
          "name": "냉각수 서모스탯 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 772",
          "name": "냉각수 호스 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 000",
          "name": "흡기다기관 탈장착",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 051",
          "name": "흡기다기관 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 045",
          "name": "저압 배기 터보차저 탈장착/교체",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 200",
          "name": "압력 파이프 탈장착/교환",
          "wt": 34,
          "minutes": 204,
          "hours": 3.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 507",
          "name": "저압 배기 터보차저 교환 시 추가작업",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 508",
          "name": "배기 터보차저 교환 시 흡입관 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 721",
          "name": "터보 게이트 밸브 진공포트 탈장착/교환",
          "wt": 45,
          "minutes": 270,
          "hours": 5.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 010",
          "name": "오일-진공펌프 진공호스 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 100",
          "name": "EGR 냉각기 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 110",
          "name": "EGR 라디에이터 파이프 탈장착/교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 71 501",
          "name": "배기가스 재순환 밸브 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 21 520",
          "name": "예열 릴레이 유닛 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 000",
          "name": "모든 예열 플러그 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 500",
          "name": "예열 플러그 1개 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 23 505",
          "name": "예열 플러그 모두 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 521",
          "name": "발전기 교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 514",
          "name": "솔레노이드 스위치 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 플러스 배선 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 200",
          "name": "인젝터용 와이어링 하니스 부분 배선 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 510",
          "name": "예열 시스템용 와이어링 하니스 부분 배선 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 025",
          "name": "연료레일압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 028",
          "name": "연료공급압력 점검",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 32 051",
          "name": "연료필터 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 515",
          "name": "고압펌프 탈장착",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 518",
          "name": "고압펌프 교환",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 155",
          "name": "분사장치 레일에서 어큐뮬레이터 탈장착/교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 160",
          "name": "압력라인 1개 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 170",
          "name": "모든 압력라인 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 180",
          "name": "압력라인 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 318",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 332",
          "name": "연료공급라인 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 560",
          "name": "분사장치 레일에서 어큐뮬레이터 압력센서 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 570",
          "name": "분사장치의 압력조절기 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 850",
          "name": "모든 누설오일 라인 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 851",
          "name": "연료 압력 온도센서 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 030",
          "name": "스로틀바디 탈장착/씰링",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 501",
          "name": "컨트롤 유닛 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 600",
          "name": "디지털 디젤 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 61 950",
          "name": "분사장치 코드 판독 및 진단 시스템 입력",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서 교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 534",
          "name": "디젤 미립자 필터용 배기가스 온도센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 535",
          "name": "과급압 센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 538",
          "name": "과급 공기 온도센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 560",
          "name": "공기질량계량기 탈거 및 장착/교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 585",
          "name": "배기시스템 압력센서 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 610",
          "name": "크랭크축 센서 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 010",
          "name": "연료탱크에서 연료 배출/주입 - 10리터",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 020",
          "name": "연료탱크에서 연료 배출/주입 - 20리터",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 030",
          "name": "연료탱크에서 연료 배출/주입 - 30리터",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 040",
          "name": "연료탱크에서 연료 배출/주입 - 40리터",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 050",
          "name": "연료탱크에서 연료 배출/주입 - 50리터",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 070",
          "name": "연료탱크에서 연료 배출/주입 - 70리터",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 080",
          "name": "연료탱크에서 연료 배출/주입 - 80리터",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 00 660",
          "name": "연료탱크에서 연료 배출/주입 - 60리터",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 535",
          "name": "연료탱크 교환",
          "wt": 39,
          "minutes": 234,
          "hours": 4.4,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 001",
          "name": "라디에이터 교체",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 015",
          "name": "보조 라디에이터 탈장착/교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 035",
          "name": "휀 슈라우드 전동식 휀과 함께 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 휀용 휀 슈라우드 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 046",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 26,
          "minutes": 156,
          "hours": 3.1,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 관압/점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체 탈장착",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 032",
          "name": "뒤쪽 소음기 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 100",
          "name": "중간 파이프 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 110",
          "name": "양쪽 중간 파이프 교환",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 590",
          "name": "중간 소음기 교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 001",
          "name": "배기관 홀더 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 중량 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 080",
          "name": "디젤미립자필터 탈장착/교환",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 900",
          "name": "인젝터 필터 교환 시 추가작업",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 040",
          "name": "배기 다기관 탈장착/교체",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "550i_N63",
      "model": "550i",
      "engine": "N63",
      "label": "550i N63",
      "engineCount": 81,
      "totalCount": 254,
      "items": [
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그를 탈장착/교환하다",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 522",
          "name": "모든 점화 플러그를 탈장착/교환하다 (점화코일 탈거된 상태임)",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "한 개 점화코일 교환하기 (자동 진단에 따라)",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 512",
          "name": "점화코일 두 개 이상 교환하기 (자동 진단에 따라)",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 548",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 탈장착 (자동 진단에 따라)",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 522",
          "name": "좌측 흡입압력의 압력 센서 교체 (자동 진단에 따라)",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 526",
          "name": "우측 흡입압력의 압력 센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 611",
          "name": "좌측 노크센서(들) 교환 (자동 진단에 따라)",
          "wt": 95,
          "minutes": 570,
          "hours": 10.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "발전기 탈장착/교환",
          "wt": 31,
          "minutes": 186,
          "hours": 3.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 521",
          "name": "발전기 교환 (자동 진단에 따라)",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 32 501",
          "name": "발전기용 컷아웃 릴레이 교환 (자동 진단에 따라)",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 541",
          "name": "솔레노이드 스위치 교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 511",
          "name": "솔레노이드 스위치 교체 (시동모터 탈거)",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 (+) 배선 탈장착/교체 (자동 진단에 따라 / 발전기·스타터와 B+ 점퍼 케이블 서포트 사이)",
          "wt": 110,
          "minutes": 660,
          "hours": 11.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진룸 와이어링 하니스-부분 배선 교환",
          "wt": 137,
          "minutes": 822,
          "hours": 14.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 100",
          "name": "점화코일용 와이어링 하니스-부분 배선 교환 (필요시, 좌측 또는 우측)",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 감압/정렬",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 020",
          "name": "배기시스템 전체를 탈장착한다",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 046",
          "name": "앞 소음기 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 031",
          "name": "뒤 소음기 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 034",
          "name": "뒤 두 소음기 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 050",
          "name": "촉매변환기 탈거 및 장착/교체",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 070",
          "name": "양쪽 촉매변환기 탈거 및 장착/교체",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 651",
          "name": "촉매기를 탈장착/설치한다",
          "wt": 36,
          "minutes": 216,
          "hours": 4.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 010",
          "name": "좌측 배기다기관 제거 및 설치/교체",
          "wt": 79,
          "minutes": 474,
          "hours": 8.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 65 712",
          "name": "좌측 터보차저 전자 웨이스트게이트 밸브 교환하기",
          "wt": 38,
          "minutes": 228,
          "hours": 4.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 65 714",
          "name": "우측 터보차저 전자 웨이스트게이트 밸브 교환하기",
          "wt": 42,
          "minutes": 252,
          "hours": 4.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 74 500",
          "name": "배기-터보차저용 압력 변환기 교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 545",
          "name": "양쪽 람다 감시 센서 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 514",
          "name": "배기캠축용 양측 압력센서 교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 521",
          "name": "흡기 쪽 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 050",
          "name": "표시장치의 코드 라벨 및 진단 시스템에 입력",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 010",
          "name": "우측 노크센서 교환",
          "wt": 100,
          "minutes": 600,
          "hours": 10.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 804",
          "name": "우측 연료-고압센서 교환하기",
          "wt": 56,
          "minutes": 336,
          "hours": 6.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 710",
          "name": "분사장치의 인젝터 모두 교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 721",
          "name": "분사장치의 인젝터 교환하기",
          "wt": 42,
          "minutes": 252,
          "hours": 4.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 724",
          "name": "추가적인 인젝터 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 531",
          "name": "냉각수 온도센서 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 660",
          "name": "공기질량계 탈거 및 장착/교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 501",
          "name": "압력식 공기질량계 탈거 및 장착/교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 503",
          "name": "압력센서 교환",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 505",
          "name": "압력 공기다기관의 압력센서 교환하기",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 070",
          "name": "우측 고압펌프 탈장착/교환하기",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 51 072",
          "name": "우측 고압펌프 교환하기",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 332",
          "name": "연료필터의 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 205",
          "name": "좌측 고압레일 탈장착/교환하기",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 208",
          "name": "우측 고압레일 탈장착/교환하기",
          "wt": 58,
          "minutes": 348,
          "hours": 6.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 170",
          "name": "모든 인젝터의 교환",
          "wt": 55,
          "minutes": 330,
          "hours": 6.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 63 710",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 67,
          "minutes": 402,
          "hours": 7.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 802",
          "name": "좌측 연료-고압센서 교환하기",
          "wt": 42,
          "minutes": 252,
          "hours": 4.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 64 626",
          "name": "압력 스로틀바디 탈장착/설치",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 010",
          "name": "우측 에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 030",
          "name": "양쪽 에어필터 하우징 탈장착",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 190",
          "name": "좌측 외부공기파이프 탈장착하기/교환하기",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 105",
          "name": "우측 외부공기파이프 탈장착하기/교환하기",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 060",
          "name": "연료주입관 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 030",
          "name": "연료탱크 탈장착",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 200",
          "name": "외부 연료필터 탈장착/교환하기",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료공급펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 509",
          "name": "라디에이터 세척",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 015",
          "name": "보조 라디에이터 탈장착/교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 521",
          "name": "충전 에어용 라디에이터 탈장착/교체",
          "wt": 43,
          "minutes": 258,
          "hours": 4.8,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 035",
          "name": "휠 슈라우드를 전동식 팬과 함께 탈장착/교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 036",
          "name": "전동식 휠용 휠 슈라우드 교체",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 546",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 44,
          "minutes": 264,
          "hours": 4.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 21 200",
          "name": "엔진오일 쿨러 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 22 010",
          "name": "자동변속기용 열교환기 탈장착/교환",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 001",
          "name": "좌측 과급공기 냉각장치 탈장착/교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 002",
          "name": "우측 과급공기 냉각장치 탈장착/교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 005",
          "name": "양쪽 과급공기 냉각장치 탈장착/교환",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 51 020",
          "name": "인터쿨러용 보조 냉각수펌프 탈장착/교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "Hybrid5",
      "model": "ActiveHybrid 5",
      "engine": "N55B30",
      "label": "ActiveHybrid 5 N55B30",
      "engineCount": 121,
      "totalCount": 294,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 001",
          "name": "부분적으로 엔진 탈장착",
          "wt": 193,
          "minutes": 1158,
          "hours": 19.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 046",
          "name": "모든 실린더 압축압 점검",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 090",
          "name": "엔진 탈장착",
          "wt": 133,
          "minutes": 798,
          "hours": 13.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 103",
          "name": "엔진 블록 씰링 작업",
          "wt": 317,
          "minutes": 1902,
          "hours": 32.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 481",
          "name": "엔진 보호 벗기기",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 501",
          "name": "전기팬 커버 작업",
          "wt": 61,
          "minutes": 366,
          "hours": 6.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 001",
          "name": "실린더 스탠드/실린더블록 이동",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 001",
          "name": "실린더 헤드 가스켓 교체",
          "wt": 74,
          "minutes": 444,
          "hours": 7.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "실린더 헤드 탈장착",
          "wt": 207,
          "minutes": 1242,
          "hours": 21.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 503",
          "name": "실린더 헤드 관련 부품 분해/조립",
          "wt": 64,
          "minutes": 384,
          "hours": 6.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 940",
          "name": "전기 관련 장치 처리 및 실린더 커버 탈장착/교환/씰링",
          "wt": 47,
          "minutes": 282,
          "hours": 5.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 000",
          "name": "오일팬 탈장착/씰링/교환",
          "wt": 67,
          "minutes": 402,
          "hours": 7.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 010",
          "name": "오일 펌프 체인 텐셔너용 씰링 커버 탈장착/교환",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 151",
          "name": "크랭크샤프트 교체",
          "wt": 90,
          "minutes": 540,
          "hours": 9.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 506",
          "name": "흡기 관련 부품 교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 610",
          "name": "크랭크케이스 환기 커버 교체",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 15 140",
          "name": "흡입밸브 오일 세퍼레이터 교환",
          "wt": 33,
          "minutes": 198,
          "hours": 3.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 001",
          "name": "크랭크축 교환",
          "wt": 317,
          "minutes": 1902,
          "hours": 32.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 000",
          "name": "플라이휠 탈장착/교환",
          "wt": 82,
          "minutes": 492,
          "hours": 8.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 23 010",
          "name": "진동댐퍼 탈장착/교환",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 071",
          "name": "피스톤 링 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 500",
          "name": "오일 디스크 탈장착/교환",
          "wt": 257,
          "minutes": 1542,
          "hours": 26.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "냉각기 구동벨트 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 125",
          "name": "냉각기 A/C 구동벨트용 텐셔너 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 005",
          "name": "캠샤프트 타이밍 점검",
          "wt": 50,
          "minutes": 300,
          "hours": 5.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 020",
          "name": "배기 밸브 탈장착/교환",
          "wt": 99,
          "minutes": 594,
          "hours": 10.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 022",
          "name": "흡기 밸브 탈장착/교환",
          "wt": 111,
          "minutes": 666,
          "hours": 11.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 051",
          "name": "흡기밸브 교환",
          "wt": 66,
          "minutes": 396,
          "hours": 7.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "캠샤프트 타이밍 조정",
          "wt": 27,
          "minutes": 162,
          "hours": 3.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 550",
          "name": "흡기밸브 관련 작업",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 010",
          "name": "흡기/배기 장치 교환",
          "wt": 71,
          "minutes": 426,
          "hours": 7.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 052",
          "name": "밸브트로닉 모터 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 644",
          "name": "흡기/배기 장치 탈장착/교환",
          "wt": 73,
          "minutes": 438,
          "hours": 7.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 003",
          "name": "전환 밸브 탈장착/교환",
          "wt": 69,
          "minutes": 414,
          "hours": 7.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 010",
          "name": "밸브 리프트 관련 장치 탈장착/교환",
          "wt": 56,
          "minutes": 336,
          "hours": 6.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 030",
          "name": "조절 유닛 탈장착/교환",
          "wt": 55,
          "minutes": 330,
          "hours": 6.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 000",
          "name": "오일펌프 탈장착/교환",
          "wt": 74,
          "minutes": 444,
          "hours": 7.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 010",
          "name": "오일트로프 하단 관련 작업",
          "wt": 108,
          "minutes": 648,
          "hours": 11.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 41 110",
          "name": "오일펌프 관련 밸브 탈장착/교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 198",
          "name": "호스/라인 제거 및 부착 또는 교체",
          "wt": 89,
          "minutes": 534,
          "hours": 9.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 610",
          "name": "호스/라인 관련 작업",
          "wt": 88,
          "minutes": 528,
          "hours": 9.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 43 000",
          "name": "오일 레벨/온도 센서 탈장착 또는 교체",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 43 020",
          "name": "오일 라인/호스 관련 작업",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 43 035",
          "name": "오일 라인 관련 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 43 570",
          "name": "오일 리턴 라인 추가작업",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 005",
          "name": "냉각수 호스/라인 관련 작업",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 52 500",
          "name": "냉각수 펌프/냉각계통 탈장착/교환",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그를 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 522",
          "name": "모든 점화 플러그를 탈장착/교환 - 점화코일 탈거 상태",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "한 개 점화코일 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 512",
          "name": "점화코일 한 개 이상 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 521",
          "name": "흡입관측 센서 교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 548",
          "name": "디지털 엔진 일렉트로닉 컨트롤유닛 탈장착",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 600",
          "name": "노크센서 교환",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 650",
          "name": "흡기압 압력 센서 교체",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 651",
          "name": "흡기압력센서 교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 022",
          "name": "스타터 제너레이터 교체",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 35 005",
          "name": "전기 기계 탈장착/교환",
          "wt": 86,
          "minutes": 516,
          "hours": 9.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 35 010",
          "name": "비틀림 댐퍼 탈장착/교환",
          "wt": 83,
          "minutes": 498,
          "hours": 8.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 36 010",
          "name": "전기 기계 일렉트로닉 교환",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 36 014",
          "name": "전기 기계-전자시스템 탈거 및 장착",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 41 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 605",
          "name": "배터리 + 배선 탈장착/교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 001",
          "name": "엔진용 와이어링 하니스-부분 배선 교환",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 100",
          "name": "점화코일용 와이어링 하니스-부분 배선 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 285",
          "name": "엔진오일 오일레벨 센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 586",
          "name": "오일압력센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 74 507",
          "name": "터보기의 압력변환기 교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "11 78 610",
          "name": "람다-감시 센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 521",
          "name": "크랭크축 센서 교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "12 14 531",
          "name": "캠축의 모듈 배출 센서 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 158",
          "name": "고압레일 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 170",
          "name": "모든 압력라인 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 318",
          "name": "분사장치의 모든 인젝터 탈장착",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 594",
          "name": "연료-저압센서 교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 719",
          "name": "분사장치의 인젝터 모두 교환",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 720",
          "name": "분사장치의 인젝터 교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 724",
          "name": "추가 분사 인젝터 교환",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 030",
          "name": "스로틀바디 탈장착/씰링",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 031",
          "name": "스로틀바디 전체 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 531",
          "name": "냉각수 온도센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 560",
          "name": "오일온도 센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 62 666",
          "name": "진공펌프 센서 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 000",
          "name": "에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 001",
          "name": "에어필터 하우징 전체 교환",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 170",
          "name": "에어 덕트 탈장착/교환",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 031",
          "name": "연료탱크 교환",
          "wt": 39,
          "minutes": 234,
          "hours": 4.4,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료계 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 200",
          "name": "외부 연료필터 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 610",
          "name": "활성탄 여과기 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 010",
          "name": "연료공급펌프 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 14 500",
          "name": "전동식 연료펌프용 컨트롤 유닛 탈장착/교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 025",
          "name": "E-DME의 일렉트로닉스 냉각수 배출 및 주입",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터 탈장착",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 001",
          "name": "E-DME 일렉트로닉스용 라디에이터 탈장착/교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 001",
          "name": "라디에이터 교체",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 015",
          "name": "보조 라디에이터 탈장착/교체",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 035",
          "name": "휀 슈라우드 전동식 휀과 함께 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 040",
          "name": "서모스탯트 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 046",
          "name": "모듈 캐리어 탈장착/교환",
          "wt": 29,
          "minutes": 174,
          "hours": 3.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 100",
          "name": "냉각수 익스텐션 탱크 탈장착/교체",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 509",
          "name": "라디에이터 세척",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 536",
          "name": "전동식 휀용 슈라우드 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 21 200",
          "name": "엔진오일 쿨러 탈장착/교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 22 010",
          "name": "자동변속기용 열교환기 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 관압/점검",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 525",
          "name": "배기시스템 전체 교체",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 081",
          "name": "양쪽 배기구 커버 교체",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 10 580",
          "name": "배기구 커버 1개 교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 031",
          "name": "뒤 소음기 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 034",
          "name": "뒤 우측 소음기 교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 550",
          "name": "중간 소음기 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 050",
          "name": "촉매변환기 탈거 및 장착/교체",
          "wt": 24,
          "minutes": 144,
          "hours": 2.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 651",
          "name": "촉매기 탈장착/탈소",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 040",
          "name": "배기 다기관 탈장착/교체",
          "wt": 89,
          "minutes": 534,
          "hours": 9.4,
          "scope": "engine"
        }
      ]
    },
    {
      "key": "M5_S63",
      "model": "M5",
      "engine": "S63",
      "label": "M5 S63",
      "engineCount": 185,
      "totalCount": 358,
      "items": [
        {
          "category": "11 엔진",
          "code": "11 00 001",
          "name": "부분엔진 리턴 장착",
          "wt": 285,
          "minutes": 1710,
          "hours": 29.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 002",
          "name": "엔진 교체 전 조립",
          "wt": 432,
          "minutes": 2592,
          "hours": 43.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 045",
          "name": "모든 실린더의 리크 손실압력 점검",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 050",
          "name": "엔진 탈장착",
          "wt": 150,
          "minutes": 900,
          "hours": 15.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 500",
          "name": "엔진 오일 서비스",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 00 540",
          "name": "모든 실린더의 압축압력 점검",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 11 001",
          "name": "실린더 손상 점검 - 스코프 이용",
          "wt": 37,
          "minutes": 222,
          "hours": 4.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 004",
          "name": "왼쪽 실린더 헤드 커버 탈장착/교환",
          "wt": 136,
          "minutes": 816,
          "hours": 14.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 008",
          "name": "오른쪽 실린더 헤드 커버 탈장착/교환",
          "wt": 84,
          "minutes": 504,
          "hours": 8.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 100",
          "name": "좌측 실린더 헤드 교환",
          "wt": 283,
          "minutes": 1698,
          "hours": 28.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 107",
          "name": "우측 실린더 헤드 교환",
          "wt": 301,
          "minutes": 1806,
          "hours": 30.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 110",
          "name": "좌측 실린더 헤드 가스켓 교환",
          "wt": 244,
          "minutes": 1464,
          "hours": 24.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 111",
          "name": "우측 실린더 헤드 가스켓 교환",
          "wt": 250,
          "minutes": 1500,
          "hours": 25.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 156",
          "name": "좌측 실린더 헤드 조립",
          "wt": 290,
          "minutes": 1740,
          "hours": 29.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 190",
          "name": "우측 실린더 헤드 조립",
          "wt": 200,
          "minutes": 1200,
          "hours": 20.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 602",
          "name": "실린더 헤드 분해 조립",
          "wt": 381,
          "minutes": 2286,
          "hours": 38.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 603",
          "name": "실린더 헤드 흡기 밸브 시스템 조립",
          "wt": 90,
          "minutes": 540,
          "hours": 9.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 655",
          "name": "캠샤프트 베어링 조임",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 670",
          "name": "크랭크축 밸런서 탈장착/교환",
          "wt": 184,
          "minutes": 1104,
          "hours": 18.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 12 720",
          "name": "실린더 헤드 시스템 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 010",
          "name": "오일 팬 탈장착/교환",
          "wt": 127,
          "minutes": 762,
          "hours": 13.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 13 205",
          "name": "오일 펌프 탈장착/교환",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 080",
          "name": "상부 타이밍 케이스 커버 탈장착/교환 또는 조립",
          "wt": 16,
          "minutes": 96,
          "hours": 2.1,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 110",
          "name": "하단 타이밍 케이스 커버 탈장착/교환 또는 조립",
          "wt": 367,
          "minutes": 2202,
          "hours": 37.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 141",
          "name": "타이밍 케이스 커버 오일 샤프트씰 교체",
          "wt": 41,
          "minutes": 246,
          "hours": 4.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 151",
          "name": "크랭크씰 교체",
          "wt": 88,
          "minutes": 528,
          "hours": 9.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 590",
          "name": "하부 타이밍 케이스 커버 탈장착/교환 또는 조립",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 601",
          "name": "스냅링 교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 685",
          "name": "우측 하부 타이밍 케이스 커버 탈장착/교환 또는 조립",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 14 706",
          "name": "냉각수펌프 케이스 커버 탈장착/교환",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 15 502",
          "name": "실린더 1-4 연결 환기 라인 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 15 503",
          "name": "실린더 5-8 연결 환기 라인 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 21 511",
          "name": "크랭크축 교환",
          "wt": 431,
          "minutes": 2586,
          "hours": 43.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 22 505",
          "name": "플라이휠 탈장착/교환",
          "wt": 90,
          "minutes": 540,
          "hours": 9.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 000",
          "name": "피스톤 탈장착/교환",
          "wt": 393,
          "minutes": 2358,
          "hours": 39.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 500",
          "name": "모든 피스톤 탈장착/교환",
          "wt": 381,
          "minutes": 2286,
          "hours": 38.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 25 671",
          "name": "피스톤 링 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 010",
          "name": "벨트기 구동벨트 교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 020",
          "name": "벨트기 구동벨트 텐셔너 교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 050",
          "name": "에어컨 컴프레서 V벨트 교체",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 28 120",
          "name": "구동벨트 탈장착/교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 019",
          "name": "모든 밸브 조정",
          "wt": 272,
          "minutes": 1632,
          "hours": 27.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 034",
          "name": "좌측 배기밸브 탈장착/교환",
          "wt": 209,
          "minutes": 1254,
          "hours": 21.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 038",
          "name": "우측 배기밸브 탈장착/교환",
          "wt": 124,
          "minutes": 744,
          "hours": 12.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 052",
          "name": "흡기 타이밍 체인 교환",
          "wt": 374,
          "minutes": 2244,
          "hours": 37.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 094",
          "name": "커버링 체인텐셔너 교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 505",
          "name": "커버링 체인텐셔너 탈장착/교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 513",
          "name": "좌측 밸브 캠 교환",
          "wt": 214,
          "minutes": 1284,
          "hours": 21.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 517",
          "name": "밸브 캠 교환",
          "wt": 214,
          "minutes": 1284,
          "hours": 21.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 534",
          "name": "우측 흡기밸브 탈장착/교환",
          "wt": 207,
          "minutes": 1242,
          "hours": 21.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 556",
          "name": "압축 타이밍 체인 교환",
          "wt": 372,
          "minutes": 2232,
          "hours": 37.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 571",
          "name": "우측 흡기 타이밍 점검",
          "wt": 115,
          "minutes": 690,
          "hours": 12.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 571",
          "name": "좌측 흡기 타이밍 점검",
          "wt": 115,
          "minutes": 690,
          "hours": 12.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 572",
          "name": "좌측 흡기 밸브 타이밍 점검",
          "wt": 164,
          "minutes": 984,
          "hours": 16.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 31 575",
          "name": "좌측 캠샤프트 세팅 점검",
          "wt": 214,
          "minutes": 1284,
          "hours": 21.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 552",
          "name": "좌측 흡기 밸브 탈장착/교환",
          "wt": 215,
          "minutes": 1290,
          "hours": 22.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 33 554",
          "name": "우측 흡기 밸브 탈장착/교환",
          "wt": 215,
          "minutes": 1290,
          "hours": 22.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 34 520",
          "name": "모든 밸브 탈장착/교환",
          "wt": 54,
          "minutes": 324,
          "hours": 5.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 010",
          "name": "좌측 흡기 VANOS 유닛 탈장착/교환",
          "wt": 117,
          "minutes": 702,
          "hours": 12.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 118",
          "name": "우측 흡기 VANOS 유닛 탈장착/교환",
          "wt": 119,
          "minutes": 714,
          "hours": 12.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 547",
          "name": "좌측 푸셔 유닛 탈장착/교환",
          "wt": 110,
          "minutes": 660,
          "hours": 11.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 548",
          "name": "우측 푸셔 유닛 탈장착/교환",
          "wt": 119,
          "minutes": 714,
          "hours": 12.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 715",
          "name": "좌측 배기 캠샤프트 밸브 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 720",
          "name": "좌측 흡기 캠샤프트 밸브 탈장착/교환",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 721",
          "name": "우측 흡기 캠샤프트 밸브 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 36 723",
          "name": "모든 흡기 캠샤프트 밸브 탈장착/교환",
          "wt": 20,
          "minutes": 120,
          "hours": 2.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 006",
          "name": "좌측 진공펌프 탈장착/교환",
          "wt": 210,
          "minutes": 1260,
          "hours": 21.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 008",
          "name": "우측 진공펌프 탈장착/교환",
          "wt": 210,
          "minutes": 1260,
          "hours": 21.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 012",
          "name": "진공펌프 2개 탈장착/교환",
          "wt": 190,
          "minutes": 1140,
          "hours": 19.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 030",
          "name": "진공라인 탈장착/교환",
          "wt": 140,
          "minutes": 840,
          "hours": 14.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 602",
          "name": "좌측 진공펌프 레귤레이터 탈장착/교환",
          "wt": 138,
          "minutes": 828,
          "hours": 14.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 37 604",
          "name": "우측 진공펌프 레귤레이터 탈장착/교환",
          "wt": 158,
          "minutes": 948,
          "hours": 16.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 500",
          "name": "오일 압력조절밸브 탈장착/교환",
          "wt": 93,
          "minutes": 558,
          "hours": 9.8,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 42 615",
          "name": "오일 체크밸브 탈장착/교환",
          "wt": 54,
          "minutes": 324,
          "hours": 5.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 46 000",
          "name": "오일 리턴라인 탈장착/교환",
          "wt": 100,
          "minutes": 600,
          "hours": 10.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 000",
          "name": "냉각수 펌프 탈장착/교환",
          "wt": 25,
          "minutes": 150,
          "hours": 3.0,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 51 601",
          "name": "냉각수 조절기 탈장착/교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 601",
          "name": "배기-터보차저 냉각수 호스 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 602",
          "name": "냉각수 호스 탈장착/교환",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 648",
          "name": "냉각수 파이프 탈장착/교환",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 53 747",
          "name": "냉각수 호스 교체",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 005",
          "name": "흡기 매니폴드 탈장착/교환",
          "wt": 140,
          "minutes": 840,
          "hours": 14.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 61 008",
          "name": "우측 흡기 매니폴드 탈장착/교환",
          "wt": 158,
          "minutes": 948,
          "hours": 16.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 010",
          "name": "고압 터보차저 탈장착/교환",
          "wt": 51,
          "minutes": 306,
          "hours": 5.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 020",
          "name": "우측 흡기-터보차저 탈장착/교환",
          "wt": 54,
          "minutes": 324,
          "hours": 5.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 030",
          "name": "좌측 흡기-터보차저 탈장착/교환",
          "wt": 54,
          "minutes": 324,
          "hours": 5.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 535",
          "name": "좌측 터보차저 탈장착/교환",
          "wt": 68,
          "minutes": 408,
          "hours": 7.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 600",
          "name": "터보차저 탈장착/교환",
          "wt": 69,
          "minutes": 414,
          "hours": 7.4,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 620",
          "name": "우측 터보차저 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 625",
          "name": "마운팅 터보차저 탈장착/교환",
          "wt": 101,
          "minutes": 606,
          "hours": 10.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 650",
          "name": "베어링 탈장착/교환",
          "wt": 18,
          "minutes": 108,
          "hours": 2.3,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 810",
          "name": "좌측 터보차저 리턴라인 교체",
          "wt": 84,
          "minutes": 504,
          "hours": 8.9,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 65 910",
          "name": "좌측 터보차저 오일 공급관 교체",
          "wt": 82,
          "minutes": 492,
          "hours": 8.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 66 000",
          "name": "가스켓 탈장착/교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 74 509",
          "name": "배기-터보차저용 압력 변환기 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 74 600",
          "name": "터보차저 오일 라인 연결 교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 74 612",
          "name": "터보차저 냉각수 라인 분리 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 74 670",
          "name": "터보차저 냉각수 라인 연결 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 78 545",
          "name": "양쪽 람다-감시 센서 교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "11 엔진",
          "code": "11 78 630",
          "name": "질량공기센서 교환",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 12 011",
          "name": "모든 점화 플러그를 탈장착/교환한다",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 511",
          "name": "한 개 점화코일 교환하기",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 13 512",
          "name": "점화코일 한 개 이상 교환하기",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 514",
          "name": "배기캠축의 캠축센서 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 521",
          "name": "크랭크축 센서 교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 555",
          "name": "실린더 1-4 디지털 엔진 일렉트로닉 컨트롤유닛 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 556",
          "name": "실린더 5-8 디지털 엔진 일렉트로닉 컨트롤유닛 교체",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 557",
          "name": "디지털 엔진 일렉트로닉의 양쪽 컨트롤유닛 교체",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 610",
          "name": "우측 노크센서 교환",
          "wt": 157,
          "minutes": 942,
          "hours": 16.2,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 611",
          "name": "좌측 노크센서 교환",
          "wt": 138,
          "minutes": 828,
          "hours": 14.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 14 953",
          "name": "분사장치의 코드 판독 및 전달 시스템에 입력",
          "wt": 8,
          "minutes": 48,
          "hours": 1.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 31 020",
          "name": "스타트모터 탈장착/교체",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 42 500",
          "name": "배터리 플러스 배선 탈장착/교체",
          "wt": 168,
          "minutes": 1008,
          "hours": 17.3,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 300",
          "name": "실린더 1-4 엔진 점화모듈 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 301",
          "name": "실린더 5-8 엔진 점화모듈 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 302",
          "name": "실린더 1-4 센서기능-모듈 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 164,
          "minutes": 984,
          "hours": 16.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 305",
          "name": "실린더 5-8 밸브트로닉-서보모터 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 802",
          "name": "실린더 5-8 센서기능-모듈 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 144,
          "minutes": 864,
          "hours": 14.9,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 51 804",
          "name": "실린더 1-4 밸브트로닉-서보모터 와이어링 하니스 부분 배선 탈장착/교체",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 52 030",
          "name": "컨트롤 유닛 홀더 분해 및 장착",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 280",
          "name": "오일압력 스위치 탈장착/교환",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "12 엔진 일렉트릭",
          "code": "12 61 285",
          "name": "엔진오일 오일레벨 센서 교환",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 00 504",
          "name": "연료통 환기 밸브 교환 - 좌측",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 00 506",
          "name": "연료통 환기 밸브 교환 - 우측",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 501",
          "name": "압력센서 교환 - 좌측 차지공기파이프 또는 인터쿨러",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 502",
          "name": "압력센서 교환 - 우측 차지공기파이프 또는 인터쿨러",
          "wt": 3,
          "minutes": 18,
          "hours": 0.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 503",
          "name": "압력센서 교환 - 좌측 흡기다기관",
          "wt": 131,
          "minutes": 786,
          "hours": 13.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 504",
          "name": "압력센서 교환 - 우측 흡기다기관",
          "wt": 131,
          "minutes": 786,
          "hours": 13.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 531",
          "name": "냉각수 온도센서 교체",
          "wt": 12,
          "minutes": 72,
          "hours": 1.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 580",
          "name": "공기필터기 탈거 및 장착/교체",
          "wt": 1,
          "minutes": 6,
          "hours": 0.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 02 581",
          "name": "양쪽 압력식 공기조절밸브 탈거 및 장착/교체",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 31 020",
          "name": "좌측 고압펌프 탈장착/교환하기",
          "wt": 32,
          "minutes": 192,
          "hours": 3.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 032",
          "name": "연료공급라인 탈장착/교환",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 205",
          "name": "좌측 고압레일 탈장착/교환하기",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 208",
          "name": "우측 고압레일 탈장착/교환하기",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 585",
          "name": "분사장치의 모든 인젝터 탈장착/교환",
          "wt": 35,
          "minutes": 210,
          "hours": 4.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 604",
          "name": "우측 람다-고압센서 교환하기",
          "wt": 13,
          "minutes": 78,
          "hours": 1.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 721",
          "name": "분사장치의 인젝터 교환하기 - 실린더 1-4",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 722",
          "name": "분사장치의 인젝터 교환하기 - 실린더 뱅크 5-8",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 53 724",
          "name": "추가 분기 인젝터 교환",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 015",
          "name": "좌측 스로틀바디 탈장착/교환하기",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 54 020",
          "name": "우측 스로틀바디 탈장착/교환하기",
          "wt": 11,
          "minutes": 66,
          "hours": 1.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 010",
          "name": "좌측 에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 100",
          "name": "좌측 외부공기파이프 탈장착/교환하기",
          "wt": 22,
          "minutes": 132,
          "hours": 2.7,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 105",
          "name": "우측 외부공기파이프 탈장착/교환하기",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 172",
          "name": "좌측 에어덕트 탈장착/교환하기",
          "wt": 21,
          "minutes": 126,
          "hours": 2.6,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 173",
          "name": "우측 에어덕트 탈장착/교환하기",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 174",
          "name": "양쪽 에어덕트 탈장착/교환하기",
          "wt": 23,
          "minutes": 138,
          "hours": 2.8,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 71 530",
          "name": "양쪽 에어필터 하우징 탈장착",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "13 연료공급 및 제어",
          "code": "13 72 002",
          "name": "양쪽 에어클리너 교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 11 060",
          "name": "연료주입관 탈장착/교환",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 000",
          "name": "연료기 센서 탈장착/교환",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 010",
          "name": "활성탄 여과기 탈장착/교환",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 200",
          "name": "외부 연료필터 탈장착/교환하기",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "16 연료공급",
          "code": "16 12 500",
          "name": "연료-레벨 센서 교환하기",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 008",
          "name": "고온회로용 냉각제 배출 및 주입",
          "wt": 17,
          "minutes": 102,
          "hours": 2.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 009",
          "name": "특수공구로 냉각 시스템의 방수성 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 010",
          "name": "냉각시스템과 연소실 간 기밀도 점검",
          "wt": 4,
          "minutes": 24,
          "hours": 0.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 00 039",
          "name": "냉각 시스템 배기 및 특수공구로 방수성 점검",
          "wt": 5,
          "minutes": 30,
          "hours": 1.0,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 000",
          "name": "라디에이터를 탈장착한다",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 016",
          "name": "보조 라디에이터를 우측에서 탈장착/교체한다",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 017",
          "name": "보조 라디에이터를 좌측에서 탈장착/교체한다",
          "wt": 9,
          "minutes": 54,
          "hours": 1.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 028",
          "name": "양 보조 라디에이터를 탈장착한다",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 120",
          "name": "충전 에어용 라디에이터를 탈장착/교체한다",
          "wt": 39,
          "minutes": 234,
          "hours": 4.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 375",
          "name": "오일쿨러 탈장착하기",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 509",
          "name": "라디에이터를 세척한다",
          "wt": 2,
          "minutes": 12,
          "hours": 0.7,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 11 550",
          "name": "냉각수 익스팬션 탱크 탈장착/교체",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 12 004",
          "name": "인터쿨러측 보조 라디에이터의 냉각수 호스를 분리/설치 및 교체한다",
          "wt": 30,
          "minutes": 180,
          "hours": 3.5,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 12 005",
          "name": "보조 냉각수 펌프측 인터쿨러의 냉각수 호스를 분리/설치 및 교체한다",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 13 030",
          "name": "냉각수 주유구를 탈장착/교체한다",
          "wt": 7,
          "minutes": 42,
          "hours": 1.2,
          "scope": "engine"
        },
        {
          "category": "17 냉각",
          "code": "17 21 010",
          "name": "변속기 오일쿨러 탈장착/교환",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 008",
          "name": "배기시스템 감압/정렬",
          "wt": 6,
          "minutes": 36,
          "hours": 1.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 00 021",
          "name": "배기시스템 전체 교체",
          "wt": 28,
          "minutes": 168,
          "hours": 3.3,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 034",
          "name": "뒤 두 소음기 교환",
          "wt": 14,
          "minutes": 84,
          "hours": 1.9,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 12 046",
          "name": "앞 소음기 교환",
          "wt": 19,
          "minutes": 114,
          "hours": 2.4,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 21 051",
          "name": "모든 배기파이프 장착 교체",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 095",
          "name": "좌측 중간 파이프 교환하기",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 096",
          "name": "우측 중간 파이프 교환하기",
          "wt": 10,
          "minutes": 60,
          "hours": 1.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 31 097",
          "name": "양쪽 중간 파이프 교환",
          "wt": 15,
          "minutes": 90,
          "hours": 2.0,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 060",
          "name": "촉매변환기 탈거 및 장착/교체 - 실린더 4-6",
          "wt": 42,
          "minutes": 252,
          "hours": 4.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 070",
          "name": "양쪽 촉매변환기 탈거 및 장착/교체",
          "wt": 46,
          "minutes": 276,
          "hours": 5.1,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 32 550",
          "name": "촉매변환기 탈거 및 장착/교체 - 실린더 1-3",
          "wt": 40,
          "minutes": 240,
          "hours": 4.5,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 010",
          "name": "좌측 배기다기관 제거 및 설치/교체",
          "wt": 92,
          "minutes": 552,
          "hours": 9.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 020",
          "name": "우측 배기다기관 제거 및 설치/교체",
          "wt": 92,
          "minutes": 552,
          "hours": 9.7,
          "scope": "engine"
        },
        {
          "category": "18 배기시스템",
          "code": "18 40 030",
          "name": "양쪽 배기다기관 탈부착/교체",
          "wt": 92,
          "minutes": 552,
          "hours": 9.7,
          "scope": "engine"
        }
      ]
    }
  ]
};
});
