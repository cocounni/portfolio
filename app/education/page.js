import './education.css'

export default function Education () {
    return (
        <div className="mainContent">
            <div className="title">Edu / Experience</div>
            <div className="educationContent">
                <div className="eduTitle">Education</div>
                <div className="univContent">
                    <div className="univLeft">
                        <div className="sookmyung">숙명여자대학교</div>
                        <div className="period"></div>
                    </div>
                    <div className="univRight">
                        생명시스템학부(주전공)
                        <br></br>
                        IT공학전공(복수전공)
                    </div>
                </div>
                <div className="kraftonContent">
                    <div className="kraftonLeft">
                        <div className="kraftonJungle">크래프톤 정글</div>
                        <div className="period">2023.04 ~ 2023.08</div>
                    </div>
                    <div className="kraftonRight">
                        소프트웨어 개발자로의 커리어 전환을 희망하는 지원자를 선발해 육성하는 크래프톤의 CRS 프로그램.
                        <br></br>- 자료구조, 알고리즘(4주): 자료구조를 학습하며 Baekjoon Online Judge의 문제풀이를 통해 다양한 알고리즘 및 Computer Science의 기본 지식 학습
                        <br></br>- RB트리, 말록랩, 웹서버(3주): RB tree, Malloc LAB, Web Proxy Server를 직접 만들어보는 과정을 통한 C언어 학습
                        <br></br>- 컴퓨터구조, C언어, 운영체제(6주): KAIST PintOS의 코드를 직접 수정해가며 프로그램의 동작 원리를 익히고 테스트 케이스를 통과하는 프로젝트
                        <br></br>- 팀 프로젝트(5주): [프로젝트명: DevProfile] 팀원들과 원하는 주제와 기술 스택으로 프로젝트를 기획 및 개발한 후 기술적 난점을 개선해 보는 과정
                    </div>
                </div>
            </div>
            <div className="experienceContent">
                <div className="expTitle">Experience</div>
                    <div className="dayoneContent">
                    <div className="expLeft">
                        <div className="dayone">데이원컴퍼니</div>
                        <div className="period">2023.09 ~ 2023.11</div>
                    </div>
                    <div className="expRight">
                    <div className="role">DX 기업교육팀 / 데이터 분석 및 전처리 실습 코치</div>
                        <br></br>업무 내용
                        <br></br>-삼성전자 Citizen Developer 과정의 데이터 분석/전처리 강의에서 실습 코치로 참여하며,
                        <br></br>Pandas, NumPy, Matplotlib 등 주요 Python 라이브러리를 활용하여 수강생들이 데이터 분석의 기초를 익히도록 지원
                    </div>
                </div>
            </div>
            
        </div>
    )
}