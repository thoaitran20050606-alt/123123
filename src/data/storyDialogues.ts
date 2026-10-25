/**
 * ============================================================================
 * TRUNG TÂM QUẢN LÝ DỮ LIỆU HỘI THOẠI & ÂM THANH LỒNG TIẾNG (STORY DIALOGUES)
 * ============================================================================
 * 
 * HƯỚNG DẪN CHÈN ÂM THANH BẰNG CODE CHO TỪNG ĐOẠN HỘI THOẠI:
 * 
 * 💡 CÁCH 1 (Khuyên dùng khi để file trong thư mục `src/assets/audio/`):
 *   B1: Import file ở đầu file này:
 *       import chaoEmVoice from '../assets/audio/chaoem.mp3';
 *   B2: Gán vào câu thoại:
 *       audio: chaoEmVoice
 * 
 * 💡 CÁCH 2 (Tự động thông minh với tên file):
 *   Khi bạn đã bỏ file vào `src/assets/audio/` (ví dụ `chaoem.mp3`),
 *   hệ thống đã được nâng cấp tự động dò tìm. Bạn chỉ cần điền:
 *       audio: 'chaoem.mp3'   hoặc   audio: '/assets/audio/chaoem.mp3'
 * 
 * 💡 CÁCH 3 (Dùng thư mục `public/assets/audio/`):
 *   Bỏ file vào thư mục `public/assets/audio/chaoem.mp3`,
 *   sau đó điền đường dẫn tĩnh:
 *       audio: '/assets/audio/chaoem.mp3'
 * 
 * Lưu ý:
 * - Nếu không điền audio (để trống ''), game sẽ tự động phát âm thanh giả lập
 *   (synth blip) chuẩn ngữ điệu theo từng nhân vật (Phước, Trúc, Bá Hộ Long, CSGT, Thoại, Trường).
 */

import { StoryDialogueLine } from '../types/game';

// ----------------------------------------------------------------------------
// 1. MÀN 1: HỘI THOẠI THOẠI & TRƯỜNG (CẦU SÔNG BUÔNG & THPT TAM PHƯỚC)
// ----------------------------------------------------------------------------

export const THOAI_INTRO_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Chào em! Em có thấy Bá Hộ Long bắt cóc cô em Trúc chạy qua ngả nào không?!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây (VD: '/assets/audio/phuoc_hoi_thoai_1.mp3')
  },
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Hức hức... Em chào anh Phước! Em thấy Bá Hộ Long vừa phóng xe máy qua cầu chạy về hướng Phố Huyện rồi! Nhưng cổng cầu phía trước đã bị khóa chặt rồi ạ...',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Cổng bị khóa sao?! Làm cách nào để mở được khóa em ơi?',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Em có giữ chiếc chìa khóa cổng Cầu Sông Buông... Nhưng vừa nãy em bị tên đại ca Trường - trùm bắt nạt ở Trường THPT Tam Phước chặn đường cướp mất đôi dép của em! Hắn còn bắt em đi chân đất...',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Nếu anh Phước bước qua cánh cửa kế bên vào trường THPT Tam Phước đánh bại Trường giành lại đôi dép cho em, em sẽ trao chiếc chìa khóa cổng để anh qua Màn 2 cứu chị Trúc ngay lập tức!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Được lắm! Dám bắt nạt học sinh, lại còn cướp dép! Em yên tâm, anh sẽ dùng tuyệt chiêu lý lẽ "BECAUSE" dạy cho tên Trường một bài học và lấy lại dép cho em!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

export const THOAI_WAITING_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Tên Trường đang ở trong sân trường THPT Tam Phước qua cánh cửa bên cạnh kìa anh Phước! Anh cẩn thận các chiêu ném dép tổ ong của hắn nha!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Yên tâm! Lý lẽ BECAUSE của anh sẽ quét sạch bất công và lấy lại dép cho em!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

export const TRUONG_INTRO_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Trường (Trùm Bắt Nạt)',
    role: 'truong',
    text: 'Thằng nào dám bước vào sân trường THPT Tam Phước làm phiền tao?! Đôi dép tổ ong huyền thoại của thằng Thoại giờ là chiến lợi phẩm của tao rồi!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Trường! Mau trả dép lại cho Thoại và hối lỗi ngay! Đừng ỷ mạnh bắt nạt kẻ yếu, hãy nếm mùi lý lẽ công lý... BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

export const TRUONG_DEFEATED_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Trường',
    role: 'truong',
    text: 'Ui da! Tha cho tớ... Tiếng hô BECAUSE của cậu lý lẽ chặt chẽ và chói tai quá! Tớ xin chừa, tớ trả lại dép cho Thoại đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Nhớ lấy bài học này! Từ nay về sau phải biết đoàn kết, giúp đỡ bạn bè cùng trường!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

export const THOAI_RETURN_SLIPPERS_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Thoại ơi! Anh đã đánh bại tên Trường và đòi lại đôi dép cho em rồi đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Ôi trời ơi, đúng là đôi dép của em rồi! Em cảm ơn anh Phước rất nhiều! Anh đúng là anh hùng nghĩa hiệp!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Em xin trao cho anh CHÌA KHÓA CỔNG CẦU SÔNG BUÔNG 🗝️! Cổng ở cuối sông đã mở rồi, anh mau sang Màn 2 - Phố Huyện để cứu chị Trúc nhé!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Cảm ơn em Thoại! Giờ thì Bá Hộ Long hãy đợi đấy, Phước tới cứu Trúc đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

export const THOAI_COMPLETED_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Thoại',
    role: 'thoai',
    text: 'Cổng Cầu Sông Buông ở cuối sông đã mở rồi anh Phước ơi! Chúc anh sớm đoàn tụ cùng chị Trúc!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Cảm ơn em! Anh đi cứu Trúc đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// ----------------------------------------------------------------------------
// 2. MÀN 2: HỘI THOẠI TRƯỞNG TRẠM CSGT TẠI PHỐ HUYỆN
// ----------------------------------------------------------------------------

export const CSGT_50_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Trưởng Trạm CSGT',
    role: 'csgt',
    text: 'Cậu thanh niên này ăn nói lý lẽ đanh thép quá! Nhưng phố huyện có kỷ cương, ta phải dùng đạn chùm kiểm tra bản lĩnh!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Thưa chú, tình yêu chân chính không bao giờ khuất phục! Cháu quyết giải cứu cô Trúc bằng mọi giá! BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// ----------------------------------------------------------------------------
// 3. MÀN 4: HỘI THOẠI ĐẠI CHIẾN BÁ HỘ LONG (ĐẠI LỘ SÀI GÒN ĐÊM)
// ----------------------------------------------------------------------------

// Cột mốc 1: Long mất 30% Máu (HP <= 70)
export const BAHOLONG_30_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long',
    role: 'baholong',
    text: 'Tao giàu nứt đố đổ vách, còn mày thì có cái gì?! Mày chỉ có mỗi set son 500k thôi!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Set son 500k của tao là tấm lòng chân thành, còn cả núi tiền của mày chỉ là đồ vô cảm! Chân lý là đây: BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc',
    role: 'truc',
    text: 'Anh Phước nói đúng lắm! Tôi chỉ yêu người chân thành như anh Phước thôi!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Cột mốc 2: Long Hóa Điên khi xuống 50% Máu (HP <= 50)
export const BAHOLONG_50_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long',
    role: 'baholong',
    text: 'Mẹ kiếp, tao nổi điên rồi! Bão 3 xúc xắc cuồng nộ và lốc tiền đô la của tao sẽ chôn vùi mày tại đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Càng cuồng bạo thì càng lộ rõ sự đuối lý! Hãy đối mặt với tiếng thét công lý... BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Cột mốc 3: Long hoảng loạn khi mất 70% Máu (HP <= 30)
export const BAHOLONG_70_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long',
    role: 'baholong',
    text: 'Mày... mày đi yêu con Ý đi! Đừng giành Trúc của tao nữa mà! Tao chia cho mày cả vali tiền đô la!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Ý nào ở đây?! Trái tim tao trước sau như một chỉ yêu duy nhất mình Trúc! Đừng hòng mang tiền ra mua chuộc!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc',
    role: 'truc',
    text: 'Anh Phước cố lên! Hắn sắp gục ngã rồi!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Cột mốc 4: Long quỳ gục chịu thua (HP <= 0)
export const BAHOLONG_100_DEFEATED_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long',
    role: 'baholong',
    text: 'Đừng đánh nữa mà... Long xin lỗi! Long biết lỗi thật rồi! Từ nay Long xin chừa, không dám ức hiếp ai nữa!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc',
    role: 'truc',
    text: 'Anh Phước ơi! Anh đã làm được rồi, anh đã đánh bại kẻ xấu cứu em!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Trúc ơi, em bình an là điều tuyệt vời nhất! Chúng mình cùng trở về dòng Sông Buông êm đềm nhé!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// ----------------------------------------------------------------------------
// 4. MÀN THẮNG (VICTORY MODAL): ĐỐI THOẠI HẬU TRUYỆN ĐOÀN TỤ
// ----------------------------------------------------------------------------

export const VICTORY_EPILOGUE_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long (quỳ gục)',
    role: 'baholong',
    text: 'Long lạy hai người! Long biết lỗi thật rồi! Tiền bạc của Long không bao giờ mua được tấm chân tình son sắt của anh Phước và cô Trúc! Từ nay Long xin giao lại toàn bộ số sen vàng và xe cộ đền bù tổn thất, cầu xin anh chị tha thứ cho Long!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước (độ lượng)',
    role: 'phuoc',
    text: 'Đánh kẻ chạy đi không ai đánh người chạy lại! Biết sai mà hối cải là tốt. Hãy đem tiền bạc đó đi làm việc thiện, giúp đỡ bà con nghèo khó ven sông Buông! Hãy nhớ lấy: BECAUSE chính nghĩa và tình yêu chân thành sẽ luôn luôn chiến thắng!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc (rạng rỡ nép vào Phước)',
    role: 'truc',
    text: 'Cảm ơn anh Phước đã vì em mà băng qua ngàn trùng gian nan! Dù chỉ ăn cơm rau muối dưới mái tranh đơn sơ, em cũng nguyện trọn đời trọn kiếp chung thủy bên anh!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// ----------------------------------------------------------------------------
// 5. CÁC ĐOẠN HỘI THOẠI TRONG TRANH CỐT TRUYỆN (STORY CUTSCENES)
// ----------------------------------------------------------------------------

// Mở đầu Hồi 1
export const CUTSCENE_INTRO_HOI1_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Trúc ơi, nước sông hôm nay trong mát quá, đàn rái cá cứ lội theo thuyền quấn quýt. Cầu mong hai đứa mình mãi yên ả bên nhau thế này.',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc',
    role: 'truc',
    text: 'Dạ anh Phước! Dù bữa cơm chỉ có mớ rau con cá anh bắt bên sông, em cũng thấy ngọt ngào hơn vạn lần nhung lụa xa hoa.',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Mở đầu Hồi 2: Bá Hộ Long xuất hiện
export const CUTSCENE_INTRO_HOI2_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long',
    role: 'baholong',
    text: 'Hahaha! Khắp vùng sông Buông này hóa ra lại giấu một bông hoa xinh đẹp thế này! Này Trúc, mày theo thằng nghèo kiết xác chài lưới này làm gì cho mạt kiếp? Mau theo Bá Hộ Long tao về Dinh thự, vàng đeo gãy cổ, ăn sung mặc sướng!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc (đanh thép)',
    role: 'truc',
    text: 'Anh tự trọng đi! Tiền bạc của anh dơ bẩn lắm! Tôi thà ăn rau uống nước lã bên anh Phước chứ không bao giờ thèm bước chân vào dinh thự của kẻ như anh!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Mở đầu Hồi 3: Bắt cóc cô Trúc
export const CUTSCENE_INTRO_HOI3_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long (quát tháo)',
    role: 'baholong',
    text: 'Con khốn ranh con! Mày dám chê tiền của tao à?! Thằng Phước chỉ có mỗi set son 500k mà mày cũng mê được?! Tùy tùng đâu, trói gô nó lại ném lên xe máy cho tao! Kích động bầy rái cá cắn nát chân thằng Phước nếu nó dám đuổi theo!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc (hoảng sợ kêu cứu)',
    role: 'truc',
    text: 'Anh Phước ơi!! Cứu em với!! Buông tôi ra... đồ ác độc... Anh Phước mau cứu em...!!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước (phẫn nộ)',
    role: 'phuoc',
    text: 'Bá Hộ Long!! Ban ngày ban mặt ngươi dám cướp người à?! Thả Trúc ra ngay, tao không tha cho mày đâu!!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Mở đầu Hồi 4: Lời thề của Phước
export const CUTSCENE_INTRO_HOI4_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Phước (Lời thề)',
    role: 'phuoc',
    text: 'Trúc! Hãy đợi anh! Dù phải băng qua ngàn trùng sông nước, đạp bẹp bầy rái cá hay đối đầu bất cứ ai, anh thề sẽ đánh bại Bá Hộ Long và đưa em trở về bình an!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Màn 2 Briefing: Chạm trán CSGT
export const CUTSCENE_LEVEL2_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'CSGT',
    role: 'csgt',
    text: 'Đứng lại! Ai cho phép cậu chạy bạt mạng, nhảy nhót gây mất trật tự công cộng trong khu phố huyện?! Xuất trình giấy tờ, giơ tay lên đầu hàng!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước',
    role: 'phuoc',
    text: 'Thưa chú CSGT! Cháu đang khẩn cấp giải cứu cô Trúc bị tên Bá Hộ Long cậy giàu bắt cóc! Cháu có lý do hoàn toàn chính đáng... BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Màn 3 Briefing: Cảnh té xe máy trên dải phân cách
export const CUTSCENE_LEVEL3_TE_XE_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long (lồm cồm bò dậy xoa mông)',
    role: 'baholong',
    text: 'Ối giời ôi mẹ ơi té xe rồi! Nát bét con xe tay ga mấy trăm triệu của tao rồi! Cái lưng, cái mông tao đau thấu trời! Thằng Phước kia, sao mày bám dai như đỉa đói vậy hả?!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước (thắng gấp mô tô, bước xuống đanh thép)',
    role: 'phuoc',
    text: 'Bá Hộ Long! Chạy nhanh vượt ẩu, lạng lách trên dải phân cách thì té xe là quả báo nhãn tiền! Mau buông tha Trúc ra ngay!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Trúc (được Phước đỡ dậy mừng rỡ)',
    role: 'truc',
    text: 'Anh Phước! May quá chiếc xe ngã em văng vào bãi cỏ chỉ bị xây xát nhẹ! Anh bắt hắn đền tội đi!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Bá Hộ Long (lùi vào cổng dinh cơ)',
    role: 'baholong',
    text: 'Mẹ kiếp! Đừng tưởng tao té xe là hết cách! Toàn bộ lính rái cá tinh nhuệ hộ vệ đâu, mau kích hoạt bẫy đầm sen gai góc, bè bèo trơn trượt ngăn chân thằng Phước lại cho tao!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Màn 3 Slide 2: Lời nhắn nhủ của Trúc
export const CUTSCENE_LEVEL3_CONG_DINH_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Trúc (nhắn nhủ từ xa)',
    role: 'truc',
    text: 'Anh Phước ơi cẩn thận các bè bèo chuyển động và mái ngói trơn trượt! Trên mái ngói có Trái Tim hồi máu đó anh!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Màn 4 Slide 1: Trúc động viên
export const CUTSCENE_LEVEL4_TRUC_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Trúc (đứng bên lan can)',
    role: 'truc',
    text: 'Anh Phước cố lên! Hãy đập tan thói cậy giàu sang ức hiếp người khác của hắn!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

// Màn 4 Slide 2: Đối thoại nảy lửa trước giờ G
export const CUTSCENE_LEVEL4_BEFORE_BATTLE_DIALOGUES: StoryDialogueLine[] = [
  {
    speaker: 'Bá Hộ Long (gầm rú)',
    role: 'baholong',
    text: 'Mẹ kiếp! Mày ép tao vào đường cùng hả Phước?! Nhìn lại mình xem, mày chỉ là thằng nghèo chài lưới ven sông Buông, lấy tư cách gì tranh giành Trúc với tao?! Tao giàu nứt đố đổ vách, mày có cái gì?!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Phước (đanh thép)',
    role: 'phuoc',
    text: 'Bá Hộ Long! Tiền tài của mày có chất cao như núi cũng không bao giờ mua được trái tim chân thành! Đừng hòng cậy tiền ép người! Hãy đón nhận sức mạnh của chân lý... BECAUSE!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
  {
    speaker: 'Bá Hộ Long (rút xúc xắc cười man dại)',
    role: 'baholong',
    text: 'Nực cười! Trên đời này cái gì không mua được bằng tiền thì sẽ mua được bằng RẤT NHIỀU TIỀN! Bão đô la và xúc xắc ma thuật của tao sẽ chôn vùi mày tại đây!',
    audio: '', // <-- Điền đường dẫn file âm thanh tại đây
  },
];

/**
 * Tra cứu danh sách câu thoại theo mã stage trong game
 */
export function getStoryEventLines(stage: string): StoryDialogueLine[] {
  switch (stage) {
    case 'thoai_intro':
      return THOAI_INTRO_DIALOGUES;
    case 'thoai_waiting':
      return THOAI_WAITING_DIALOGUES;
    case 'truong_intro':
      return TRUONG_INTRO_DIALOGUES;
    case 'truong_defeated':
      return TRUONG_DEFEATED_DIALOGUES;
    case 'thoai_return_slippers':
      return THOAI_RETURN_SLIPPERS_DIALOGUES;
    case 'thoai_completed':
      return THOAI_COMPLETED_DIALOGUES;
    case 'phase_csgt_50':
      return CSGT_50_DIALOGUES;
    case 'phase1_30':
      return BAHOLONG_30_DIALOGUES;
    case 'phase_long_50':
      return BAHOLONG_50_DIALOGUES;
    case 'phase2_70':
      return BAHOLONG_70_DIALOGUES;
    case 'phase3_100':
      return BAHOLONG_100_DEFEATED_DIALOGUES;
    default:
      return [];
  }
}
