import React, { useState } from 'react';

const QuadraticSolver = () => { 
// Sử dụng useState để quản lý các hệ số a, b, c và kết quả 
const [a, setA] = useState(0); 
const [b, setB] = useState(0); 
const [c, setC] = useState(0); 
const [result, setResult] = useState(''); 
// Hàm mũi tên để xử lý sự kiện thay đổi giá trị của các hệ số 
const handleInputChange = (e, setter) => { 
setter(Number(e.target.value)); 
}; 
// Hàm mũi tên để giải phương trình bậc 2 
const solveEquation = () => { 
const delta = b * b - 4 * a * c; // Tính delta 
if (delta < 0) { 
setResult('Phương trình vô nghiệm'); 
} else if (delta === 0) { 
const x = -b / (2 * a); 
setResult(`Phương trình có nghiệm kép: x = ${x}`); 
} else { 
const x1 = (-b + Math.sqrt(delta)) / (2 * a); 
const x2 = (-b - Math.sqrt(delta)) / (2 * a); 
setResult(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = 
${x2}`); 
} 
}; 
return ( 
<div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}> 
<h1>Giải Phương Trình Bậc 2</h1> 
<div> 
<label>Nhập hệ số a: </label> 
<input  
type="number"  
value={a} 
onChange={(e) => handleInputChange(e, setA)}  
placeholder="Hệ số a"  
/> 
</div> 
<div> 
<label>Nhập hệ số b: </label> 
<input  
type="number"  
value={b} 
onChange={(e) => handleInputChange(e, setB)}  
placeholder="Hệ số b"  
/> 
</div> 
<div> 
<label>Nhập hệ số c: </label> 
<input  
type="number"  
value={c} 
onChange={(e) => handleInputChange(e, setC)}  
placeholder="Hệ số c"  
/> 
</div> 
<button onClick={solveEquation}>Giải Phương Trình</button> 
{result && <p>Kết quả: {result}</p>} 
</div> 
); 
}; 
export default QuadraticSolver; 
