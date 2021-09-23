const app = require("../src/server");

const PORT = process.env.PORT || 5000; //환경변수로 셋팅해 env폴더의 토트값을 사용하고 없으면 5000으로 실행하겠다는 의미

app.listen(PORT, () => { 
    console.log(`서버가동 포트: ${PORT}`);
});