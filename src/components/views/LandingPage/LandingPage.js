import React from 'react'
import { FaWineGlassAlt } from "react-icons/fa"

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaWineGlassAlt style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>::: Winer :::</span>
                <span style={{ fontSize: '1rem' }}>와인 한잔의 모험이 추억이 될수 있도록</span>
                <span style={{ fontSize: '1rem' }}>정답이 아닌 방향을 고민합니다.</span>
                <span style={{ fontSize: '1rem' }}>데이터 기반 와인 추천 서비스</span>
                <span style={{ fontSize: '1rem' }}>와이너 입니다.</span>
                <br /><br />
                <span style={{ fontSize: '1rem' }}>와이너 시음회는 조금 다를 수 있어요.</span>
                <span style={{ fontSize: '1rem' }}>저희 시음회는 기존의 다른 행사와는 달리</span>
                <span style={{ fontSize: '1rem' }}>서로 다른 특성을 지닌 다양한 와인에 대한</span>
                <span style={{ fontSize: '1rem' }}>고객 선호도 데이터를 수집하기 위해</span>
                <span style={{ fontSize: '1rem' }}>다양한 와인을 블라인드로 사용하며 선호도와</span>
                <span style={{ fontSize: '1rem' }}>리뷰 데이터를 수집하고 있습니다.</span>
            </div>
        </>
    )
}

export default LandingPage
