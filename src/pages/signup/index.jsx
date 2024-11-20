import { useEffect, useState } from "react";
import * as S from "./signup.style";
import logo from "../../assets/logo.png";
import Splash from "./components/splash";

export default function Signup() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  });
  return (
    <>
      {isSplash ? (
        <Splash />
      ) : (
        <S.Container>
          <S.Top>
            <p>
              무인 결제? 문제 없지! <br /> 당신의 결제 독립이 더욱 쉬워지는,
            </p>
            <img src={logo} alt="로고" />
          </S.Top>
          <S.BtnBox>
            <button />
            <button>도움 전달하기</button>
          </S.BtnBox>
        </S.Container>
      )}
    </>
  );
}
