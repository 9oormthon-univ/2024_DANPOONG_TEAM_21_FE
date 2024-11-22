import * as S from "./mainhelp.style";
import VideoAndroid from "./assets/VideoAndroid";
import VideoIos from "./assets/VideoIos";
import CompleteScreen from "./CompleteScreen";
import { useState } from "react";

export default function MainHelp() {
  const [isComplete, setIsComplete] = useState(false);

  const handleStartClick = () => {
    setIsComplete(true);
  };
  return (
    <S.Container>
      {!isComplete ? (
        <>
          <S.Top>
            <S.Title>
              <h1>상단바를 내려</h1>
              <h1>화면 녹화 기능을 켜주세요</h1>
            </S.Title>
            <S.Info>
              <p>화면 녹화를 켠 후 ‘시작하기’ 버튼을 누르면</p>
              <p>실습 페이지로 이동합니다.</p>
            </S.Info>
            <S.GridContainer>
              <S.GridBox>
                <S.GridIcon>
                  <VideoAndroid />
                </S.GridIcon>
                <p>안드로이드</p>
              </S.GridBox>
              <S.GridBox>
                <S.GridIcon>
                  <VideoIos />
                </S.GridIcon>
                <p>아이폰</p>
              </S.GridBox>
            </S.GridContainer>
          </S.Top>

          <S.StartButton onClick={handleStartClick}>시작하기</S.StartButton>
        </>
      ) : (
        <CompleteScreen />
      )}
    </S.Container>
  );
}