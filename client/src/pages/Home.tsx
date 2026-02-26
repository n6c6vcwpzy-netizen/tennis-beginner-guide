import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Play, RotateCcw } from 'lucide-react';
import DoublesScoringSim from '@/components/DoublesScoringSim';
import FaultGuide from '@/components/FaultGuide';
import CourtChangeGuide from '@/components/CourtChangeGuide';
import TiebreakerGuide from '@/components/TiebreakerGuide';

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    intro: true,
    scoring: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">🎾 테생이 머리올려</h1>
              <p className="text-sm text-blue-600 mt-1">테니스 초보자를 위한 완벽 가이드</p>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>금요일</p>
              <p>반포 종합운동장 테니스장</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 space-y-8">
        {/* Introduction Section */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">📌 행사 안내</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">📅 일시</h3>
                <p className="text-gray-700">금요일</p>
                <p className="text-lg font-bold text-blue-600">오후 7시 ~ 10시</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">📍 장소</h3>
                <p className="text-gray-700">반포 종합운동장 테니스장</p>
                <p className="text-lg font-bold text-blue-600">5번, 6번 코트</p>
                <p className="text-sm text-gray-600 mt-2">'테니스피플'에서 왔다고 말씀해 주세요!</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">🎒 필수 준비물</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li>✓ 테니스 라켓</li>
                <li>✓ 테니스화 (필수!)</li>
                <li>✓ 운동복</li>
                <li>✓ 수건, 생수</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Main Learning Tabs */}
        <Tabs defaultValue="scoring" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-blue-100 p-1">
            <TabsTrigger value="scoring" className="text-sm md:text-base">점수 계산</TabsTrigger>
            <TabsTrigger value="faults" className="text-sm md:text-base">서브 규칙</TabsTrigger>
            <TabsTrigger value="courtchange" className="text-sm md:text-base">코트 체인지</TabsTrigger>
            <TabsTrigger value="tiebreaker" className="text-sm md:text-base">타이브레이크</TabsTrigger>
          </TabsList>

          {/* Tab 1: Scoring */}
          <TabsContent value="scoring" className="space-y-6 mt-6">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl">1️⃣ 테니스 점수 계산법</CardTitle>
                <CardDescription>
                  테니스의 가장 기초적이면서도 가장 헷갈리는 부분입니다. 이 섹션에서 완벽히 이해해 보세요!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Scoring Simulator */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎮 점수 시뮬레이터</h3>
                  <p className="text-gray-700 mb-4">아래 버튼을 눌러 점수가 어떻게 변하는지 직접 체험해 보세요!</p>
                  <DoublesScoringSim />
                </div>

                {/* Point System Explanation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">📊 포인트 점수 체계</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-600">0점</p>
                      <p className="text-3xl font-bold text-blue-900">러브 (Love)</p>
                      <p className="text-xs text-gray-600 mt-2">기호: 0</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-600">1점</p>
                      <p className="text-3xl font-bold text-green-900">피프틴 (15)</p>
                      <p className="text-xs text-gray-600 mt-2">기호: 15</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-gray-600">2점</p>
                      <p className="text-3xl font-bold text-yellow-900">써티 (30)</p>
                      <p className="text-xs text-gray-600 mt-2">기호: 30</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-600">3점</p>
                      <p className="text-3xl font-bold text-red-900">포티 (40)</p>
                      <p className="text-xs text-gray-600 mt-2">기호: 40</p>
                    </div>
                  </div>
                </div>

                {/* Deuce Explanation */}
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h4 className="font-bold text-purple-900 mb-2">🎯 듀스 (Deuce) - 40:40 동점</h4>
                  <p className="text-gray-700 mb-3">
                    양쪽 선수가 모두 3포인트(40점)씩 가진 상황을 "듀스"라고 부릅니다.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>💡 <strong>듀스에서 게임을 따내는 방법:</strong></p>
                    <p className="ml-4">1. 한 선수가 1포인트를 더 따면 → "어드밴티지(AD)" 상태</p>
                    <p className="ml-4">2. AD 상태인 선수가 다시 1포인트를 따면 → 게임 획득! 🎉</p>
                    <p className="ml-4">3. AD 상태인 선수가 포인트를 잃으면 → 다시 듀스로 돌아감</p>
                  </div>
                </div>

                {/* Game Structure */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">🏆 경기 구조</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">4포인트</span>
                      <span className="text-gray-600">→</span>
                      <span className="font-bold text-green-600">1 게임</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">6게임</span>
                      <span className="text-gray-600">→</span>
                      <span className="font-bold text-blue-600">1 세트</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">2세트 (또는 3세트)</span>
                      <span className="text-gray-600">→</span>
                      <span className="font-bold text-purple-600">경기 승리</span>
                    </div>
                  </div>
                </div>

                {/* Scoring Examples */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">📝 점수 부르는 예시</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="font-semibold text-blue-900">상황 1: A선수 1포인트, B선수 0포인트</p>
                      <p className="text-gray-700">심판이 부르는 점수: <span className="font-bold">"피프틴 러브"</span></p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="font-semibold text-green-900">상황 2: A선수 2포인트, B선수 2포인트</p>
                      <p className="text-gray-700">심판이 부르는 점수: <span className="font-bold">"써티 올"</span></p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="font-semibold text-red-900">상황 3: A선수 3포인트, B선수 3포인트</p>
                      <p className="text-gray-700">심판이 부르는 점수: <span className="font-bold">"듀스"</span></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Faults */}
          <TabsContent value="faults" className="space-y-6 mt-6">
            <FaultGuide />
          </TabsContent>

          {/* Tab 3: Court Change */}
          <TabsContent value="courtchange" className="space-y-6 mt-6">
            <CourtChangeGuide />
          </TabsContent>

          {/* Tab 4: Tiebreaker */}
          <TabsContent value="tiebreaker" className="space-y-6 mt-6">
            <TiebreakerGuide />
          </TabsContent>
        </Tabs>

        {/* Additional Info */}
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-xl">⚠️ 테니스장 매너 (필독!)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">1️⃣ 이동 매너</h4>
                <p className="text-gray-700">
                  옆 코트에서 랠리 중일 때는 뒤로 지나가지 마세요. 포인트가 끝난 후 신속히 이동합니다. 
                  <span className="font-bold text-red-600"> 가로지르기는 절대 금지!</span>
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">2️⃣ 공 수거 (땡큐볼)</h4>
                <p className="text-gray-700">
                  옆 코트에서 공이 넘어오면 포인트가 끝날 때까지 기다렸다가 돌려주세요. 
                  <span className="font-bold">"죄송합니다", "감사합니다"</span> 인사는 필수입니다!
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">3️⃣ 스코어 콜</h4>
                <p className="text-gray-700">
                  서버가 서브를 넣기 전, 상대방이 들을 수 있게 <span className="font-bold">큰 소리</span>로 스코어를 먼저 말해 주세요.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">당일 코트에서 뵙겠습니다! 🎾</p>
          <p className="text-sm text-gray-500">궁금한 점은 언제든 물어봐 주세요.</p>
        </div>
      </main>
    </div>
  );
}
