
import { Theme, CardItem } from './types';

export const THEMES: Theme[] = [
  {
    id: 'mint',
    name: 'Pastel Mint',
    bg: '#E0F2F1',
    card: '#FFFFFF',
    text: '#004D40',
    accent: '#4DB6AC',
    bubble: '#B2DFDB',
    aiBubble: '#FFFFFF'
  },
  {
    id: 'pink',
    name: 'Soft Pink',
    bg: '#FCE4EC',
    card: '#FFFFFF',
    text: '#880E4F',
    accent: '#F06292',
    bubble: '#F8BBD0',
    aiBubble: '#FFFFFF'
  },
  {
    id: 'lavender',
    name: 'Lavender Calm',
    bg: '#F3E5F5',
    card: '#FFFFFF',
    text: '#4A148C',
    accent: '#BA68C8',
    bubble: '#E1BEEF',
    aiBubble: '#FFFFFF'
  },
  {
    id: 'sunset',
    name: 'Warm Sunset',
    bg: '#FFF3E0',
    card: '#FFFFFF',
    text: '#E65100',
    accent: '#FFB74D',
    bubble: '#FFE0B2',
    aiBubble: '#FFFFFF'
  },
  {
    id: 'sky',
    name: 'Sky Blue',
    bg: '#E1F5FE',
    card: '#FFFFFF',
    text: '#01579B',
    accent: '#4FC3F7',
    bubble: '#B3E5FC',
    aiBubble: '#FFFFFF'
  },
  {
    id: 'dark',
    name: 'Dark Calm',
    bg: '#1A1C1E',
    card: '#2D3035',
    text: '#E1E2E5',
    accent: '#BB86FC',
    bubble: '#45474B',
    aiBubble: '#37393E'
  }
];

export const CARDS: CardItem[] = [
  {
    id: 1,
    title: "Hôm nay thế nào?",
    icon: "🌤️",
    quotes: [
      "Bạn đã cố gắng rất nhiều rồi. Hãy tự hào về bản thân nhé.",
      "Dù ngày hôm nay có ra sao, nó cũng sắp kết thúc rồi. Ngày mai sẽ là một khởi đầu mới.",
      "Hãy hít một hơi thật sâu. Mọi chuyện sẽ ổn thôi.",
      "Bạn không cần phải làm hài lòng tất cả mọi người đâu."
    ]
  },
  {
    id: 2,
    title: "Bạn làm tốt lắm",
    icon: "🌟",
    quotes: [
      "Mỗi bước tiến nhỏ đều đáng giá. Bạn đang đi đúng hướng đấy.",
      "Bạn là duy nhất và tuyệt vời theo cách của riêng mình.",
      "Sự kiên trì của bạn chính là sức mạnh lớn nhất.",
      "Hãy nhìn lại xem bạn đã đi được bao xa rồi!"
    ]
  },
  {
    id: 3,
    title: "Đừng quá áp lực",
    icon: "🍃",
    quotes: [
      "Nghỉ 5 phút cũng không sao cả. Tâm trí bạn cần được nghỉ ngơi.",
      "Thế giới sẽ không dừng lại nếu bạn chậm lại một chút.",
      "Bạn không cần phải hoàn hảo để được yêu thương.",
      "Hãy tử tế với bản thân mình như cách bạn tử tế với người khác."
    ]
  },
  {
    id: 4,
    title: "Yêu bản thân",
    icon: "❤️",
    quotes: [
      "Hôm nay hãy dành thời gian làm điều gì đó khiến bạn mỉm cười nhé.",
      "Cơ thể và tâm hồn bạn xứng đáng được chăm sóc.",
      "Bạn là món quà quý giá của cuộc sống này.",
      "Đừng quên nói lời cảm ơn tới chính mình."
    ]
  },
  {
    id: 5,
    title: "Tìm kiếm bình yên",
    icon: "🧘",
    quotes: [
      "Bình yên nằm ở bên trong, không phải ở bên ngoài.",
      "Hãy buông bỏ những điều bạn không thể kiểm soát.",
      "Lắng nghe tiếng thở của chính mình, đó là giai điệu đẹp nhất.",
      "Mọi cơn bão rồi cũng sẽ qua đi."
    ]
  },
  {
    id: 6,
    title: "Mọi thứ sẽ ổn",
    icon: "🌈",
    quotes: [
      "Sau cơn mưa trời lại sáng, và cầu vồng sẽ xuất hiện.",
      "Khó khăn hôm nay là bài học cho ngày mai vững vàng hơn.",
      "Bạn đủ mạnh mẽ để vượt qua mọi thử thách.",
      "Cứ tin vào hành trình của mình nhé."
    ]
  }
];

export const SUGGESTIONS = [
  "Tôi đang cảm thấy áp lực.",
  "Tôi bị mất động lực.",
  "Tôi vừa có một ngày tệ.",
  "Hãy cho tôi một lời khuyên.",
  "Giúp tôi bình tĩnh lại."
];
