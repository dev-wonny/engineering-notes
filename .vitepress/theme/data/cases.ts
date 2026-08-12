export const domains = [
  { index: '01', title: 'Backend', description: 'Java와 Spring으로 서비스 API와 실행 모델을 설계합니다.', href: '/backend/' },
  { index: '02', title: 'Data', description: '정합성, 이력, 마이그레이션을 업무 의미와 함께 다룹니다.', href: '/database/' },
  { index: '03', title: 'Platform', description: '반복되는 기능을 여러 팀이 쓰는 공통 기반으로 바꿉니다.', href: '/architecture/' },
  { index: '04', title: 'Operations', description: '배포, 장애 대응, 관측 가능성까지 운영 흐름으로 연결합니다.', href: '/infrastructure/' },
]

export const notes = [
  { category: 'DATABASE', title: 'Temporal Table과 반개방 구간', description: '시간 이력 데이터의 경계 중복을 피하는 설계', href: '/database/temporal-table/' },
  { category: 'COMMERCE', title: '상품 가격 이력 설계', description: '가격의 유효 기간과 변경 이력을 모델링하는 판단', href: '/commerce/price/product-price-history' },
  { category: 'BACKEND', title: 'JPA 없이 구성하는 Spring Batch', description: '대량 처리 관점에서 단순한 Batch 실행 구조 만들기', href: '/backend/batch/spring-batch-without-jpa' },
  { category: 'ARCHITECTURE', title: 'React·Vite 정적 파일을 S3와 CloudFront로 제공하기', description: '정적 프런트엔드의 배포와 캐시 흐름 이해하기', href: '/architecture/frontend-serving/react-vite-s3-cloudfront' },
]

export const problems = [
  { problem: '사람이 반복한다', answer: 'AUTOMATION' },
  { problem: '운영자가 개발자를 기다린다', answer: 'SELF-SERVICE' },
  { problem: '정책이 코드와 사람에게 흩어져 있다', answer: 'GOVERNANCE' },
  { problem: '시스템마다 데이터 의미가 다르다', answer: 'STANDARDIZATION' },
]
