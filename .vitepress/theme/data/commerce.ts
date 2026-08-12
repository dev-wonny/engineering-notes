export const findings = [
  { title: 'Product', summary: '같은 상품이 시스템마다 다른 단위와 키로 표현됐습니다.', detail: 'Legacy 상품, 발주 기준, 신규 플랫폼의 판매 단위가 달라 단순한 행 단위 이관으로 의미를 보존하기 어려웠습니다.' },
  { title: 'Supplier', summary: '업체를 연결할 안정적인 단일 식별자가 부족했습니다.', detail: '사업자등록번호가 없거나 표기가 다른 경우가 있어 정규화된 이름과 수동 검토를 포함한 단계적 매칭이 필요했습니다.' },
  { title: 'Option', summary: '옵션 조합과 재고 단위의 의미가 일치하지 않았습니다.', detail: '옵션명 복사보다 어떤 조합이 판매·발주·재고 단위인지 먼저 합의해야 정합성을 검증할 수 있었습니다.' },
  { title: 'Media', summary: '이관 증적과 장기 운영 이미지의 목적이 섞여 있었습니다.', detail: '원천 추적용 임시 데이터와 신규 플랫폼의 업로드·리사이즈·보관 정책은 수명주기와 책임이 달랐습니다.' },
]

export const decisionGates = [
  { title: 'POLICY', text: '시스템마다 다른 의미 중 무엇을 신규 기준으로 삼을 것인가?' },
  { title: 'OWNERSHIP', text: '예외 판단, 수정, 승인과 운영 책임은 누가 맡는가?' },
  { title: 'MIGRATION', text: '원천 추적과 재실행이 가능한 이관 단위는 무엇인가?' },
  { title: 'VALIDATION', text: '어떤 환경에서 누가 무엇을 확인해야 완료인가?' },
]
