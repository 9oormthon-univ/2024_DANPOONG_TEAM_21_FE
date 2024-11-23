import styled from "styled-components";
import theme from "../../../styles/theme";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  height: 90vh;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
`;
const ShowTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: ${theme.color.black};
`;
const Contents = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.main};
  justify-content: center;
`;
const PracticeContainer = styled.div`
  width: 331px;
  height: 185px;
  border-radius: 8px;
  background-color: ${theme.color.gray3};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;
const Title = styled.span`
  color: ${theme.color.black};
  font-size: 17px;
  font-weight: 600;
`;
const Practicequestion = styled.div`
  width: 315px;
  height: auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.white};
`;
const Button = styled.div`
  width: 361px;
  height: 55px;
  border-radius: 8px;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Question() {
  const navigate = useNavigate();
  const { storeId } = useParams(); // URL에서 storeId 추출
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`/api/v1/practice/${storeId}/problem`);
        if (response.data.code === "SUCCESS") {
          setProblem(response.data.data.problem); // 문제 내용 저장
        } else {
          console.error("Failed to fetch problem: ", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch problem:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProblem();
  }, [storeId]);
  return (
    <Wrapper>
      <Container>
        <ShowTitle>'음식점'결제 화면 설명 보기</ShowTitle>
        <Contents>'음식점' 결제 예시는 가로 키오스크 형태입니다.</Contents>
        <Contents> 화면을 가로로 돌려서 진행해주세요!</Contents>
      </Container>
      <PracticeContainer>
        <Title>실습 문제</Title>
        <Practicequestion>
          {loading ? "로딩 중..." : problem || "문제를 가져오지 못했습니다."}
        </Practicequestion>
      </PracticeContainer>
      <Button onClick={() => navigate("/practice/restaurant/1")}>
        시작하기
      </Button>
    </Wrapper>
  );
}
