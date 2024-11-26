import React from 'react';
import './MainContent.css';

function MainContent() {
const article = {
title: 'Roronoa Zoro',
image: 'https://anhdephd.vn/wp-content/uploads/2022/04/anh-zoro-hinh-nen-zoro-danh-nhau-343x600.jpg', // URL hình ảnh mẫu
content: `Roronoa Zoro,[20] còn được gọi là "Thợ săn hải tặc" Zoro,[9] là một chiến binh chính của băng hải tặc Mũ Rơm, một trong hai kiếm sĩ của họ, một trong những sĩ quan cao cấp của Hạm đội Mũ Rơm,[4] và được công khai công nhận là cánh tay phải và số hai trong số thuyền trưởng của thủy thủ đoàn Monkey D. Luffy. [21][22][23][24] Trước đây là một thợ săn tiền thưởng,[6] anh là thành viên thứ hai trong thủy thủ đoàn của Luffy và là người đầu tiên tham gia nó, làm như vậy trong Arc Romance Dawn. [2]

Sinh ra ở East Blue, Zoro là con trai của Tera và Roronoa Arashi, cháu trai của Shimotsuki Furiko và Roronoa Pinzoro, và cháu trai của Shimotsuki Ushimaru, khiến anh trở thành hậu duệ của cả Gia đình Shimotsuki ở Wano Country và samurai huyền thoại, Shimotsuki Ryuma. [3][11] Là một bậc thầy của Three Sword Style, một phong cách kiếm thuật mà anh đã tạo ra trong thời thơ ấu của mình ở làng Shimotsuki, Zoro là một trong ba chiến binh mạnh nhất của Mũ Rơm, cùng với Luffy và Sanji, những người được gọi là "Bộ ba quái vật". [25][26] Ước mơ của anh là trở thành kiếm sĩ vĩ đại nhất thế giới, để tôn trọng lời hứa với người bạn thời thơ ấu đã qua đời và người anh em họ xa Kuina. [27]

Ngoài sự ô nhục của anh ta với tư cách là một trong những Mũ Rơm và là một cựu thợ săn tiền thưởng, tiền thưởng đáng kể của anh ta khi đến Quần đảo Sabaody đã khiến Zoro, cùng với Luffy được đưa vào mười một "Siêu tân binh", những tên cướp biển đồng thời đến Red Line với tiền thưởng hơn Beli100.000.000 ngay trước Chiến tranh Hội nghị thượng đỉnh. [28] Anh, mười Super Rookies khác và Marshall D. Teach sẽ tiếp tục được gọi là "Thế hệ tồi tệ nhất". [29]

Zoro đã nhận được tiền thưởng đầu tiên là Beli60,000,000 sau Arc Arabasta. Sau đó, nó đã tăng lên Beli120.000.000 sau sự cố Enies Lobby, sau đó một lần nữa lên Beli320.000.000 sau Arc Dressrosa. [17] Sau cuộc đột kích vào Onigashima, tiền thưởng của ông đã tăng lên Beli1.111.000.000.`,
author: 'John Doe',
date: 'October 8, 2024',
};

const abcd = {
    title: 'Roronoa Zoro',
    image: 'https://anhdephd.vn/wp-content/uploads/2022/04/anh-zoro-hinh-nen-zoro-danh-nhau-343x600.jpg', // URL hình ảnh mẫu
    content: `Roronoa Zoro,[20] còn được gọi là "Thợ săn hải tặc" Zoro,[9] là một chiến binh chính của băng hải tặc Mũ Rơm, một trong hai kiếm sĩ của họ, một trong những sĩ quan cao cấp của Hạm đội Mũ Rơm,[4] và được công khai công nhận là cánh tay phải và số hai trong số thuyền trưởng của thủy thủ đoàn Monkey D. Luffy. [21][22][23][24] Trước đây là một thợ săn tiền thưởng,[6] anh là thành viên thứ hai trong thủy thủ đoàn của Luffy và là người đầu tiên tham gia nó, làm như vậy trong Arc Romance Dawn. [2]
    
    Sinh ra ở East Blue, Zoro là con trai của Tera và Roronoa Arashi, cháu trai của Shimotsuki Furiko và Roronoa Pinzoro, và cháu trai của Shimotsuki Ushimaru, khiến anh trở thành hậu duệ của cả Gia đình Shimotsuki ở Wano Country và samurai huyền thoại, Shimotsuki Ryuma. [3][11] Là một bậc thầy của Three Sword Style, một phong cách kiếm thuật mà anh đã tạo ra trong thời thơ ấu của mình ở làng Shimotsuki, Zoro là một trong ba chiến binh mạnh nhất của Mũ Rơm, cùng với Luffy và Sanji, những người được gọi là "Bộ ba quái vật". [25][26] Ước mơ của anh là trở thành kiếm sĩ vĩ đại nhất thế giới, để tôn trọng lời hứa với người bạn thời thơ ấu đã qua đời và người anh em họ xa Kuina. [27]
    
    Ngoài sự ô nhục của anh ta với tư cách là một trong những Mũ Rơm và là một cựu thợ săn tiền thưởng, tiền thưởng đáng kể của anh ta khi đến Quần đảo Sabaody đã khiến Zoro, cùng với Luffy được đưa vào mười một "Siêu tân binh", những tên cướp biển đồng thời đến Red Line với tiền thưởng hơn Beli100.000.000 ngay trước Chiến tranh Hội nghị thượng đỉnh. [28] Anh, mười Super Rookies khác và Marshall D. Teach sẽ tiếp tục được gọi là "Thế hệ tồi tệ nhất". [29]
    
    Zoro đã nhận được tiền thưởng đầu tiên là Beli60,000,000 sau Arc Arabasta. Sau đó, nó đã tăng lên Beli120.000.000 sau sự cố Enies Lobby, sau đó một lần nữa lên Beli320.000.000 sau Arc Dressrosa. [17] Sau cuộc đột kích vào Onigashima, tiền thưởng của ông đã tăng lên Beli1.111.000.000.`,
    author: 'John Doe',
    date: 'October 8, 2024',
    };

return (
<main className="main-content">
<div className="article">
<h1>{article.title}</h1>
<img src={article.image} alt="Web Design" />
<p className="content">{article.content}</p>
<div className="article-meta">
<p>Written by: {article.author}</p>
<p>Date: {article.date}</p>

</div>

    </div>

        </main>
);
}

export default MainContent;