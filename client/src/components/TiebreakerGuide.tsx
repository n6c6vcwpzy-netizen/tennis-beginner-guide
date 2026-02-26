import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function TiebreakerGuide() {
  const [tbPoints, setTbPoints] = useState({ a: 0, b: 0 });

  const getTBWinner = (a: number, b: number) => {
    if (a >= 7 && a - b >= 2) return 'A+B 팀 승리!';
    if (b >= 7 && b - a >= 2) return 'C+D 팀 승리!';
    return null;
  };

  const winner = getTBWinner(tbPoints.a, tbPoints.b);

  return (
    <div className="space-y-6">
      <Card className="border-2 border-amber-200">
        <CardHeader className="bg-amber-50">
          <CardTitle className="text-2xl">4️⃣ 타이브레이크 완벽 가이드</CardTitle>
          <CardDescription>
            동호인 규칙에서는 5:5일 때 시작되는 타이브레이크. 초보자가 가장 어려워하는 부분입니다!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* When Tiebreaker Starts */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg border-2 border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-3">🎯 타이브레이크는 언제 시작될까요?</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <p className="text-lg font-bold text-amber-900 mb-2">게임 스코어 5:5 (동호인 규칙)</p>
                <p className="text-gray-700">
                  동호인 경기에서는 한 세트 안에서 양쪽 팀이 각각 5게임씩 이겼을 때, 
                  <span className="font-bold"> 타이브레이크 게임</span>을 진행합니다.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <p className="text-lg font-bold text-amber-900 mb-2">타이브레이크의 목표</p>
                <p className="text-gray-700">
                  먼저 <span className="font-bold">7포인트</span>를 획득하되, 
                  상대팀보다 <span className="font-bold">최소 2포인트</span> 이상 앞서야 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Tiebreaker Scoring System */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">📊 타이브레이크 점수 체계</h3>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <p className="font-semibold text-blue-900 mb-3">일반 게임과의 차이점:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-bold text-gray-900 mb-2">❌ 일반 게임</p>
                  <p className="text-sm text-gray-700">
                    점수: 0, 15, 30, 40, 게임
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-bold text-gray-900 mb-2">✅ 타이브레이크</p>
                  <p className="text-sm text-gray-700">
                    점수: 1, 2, 3, 4, 5, 6, 7...
                  </p>
                </div>
              </div>
              <p className="text-sm text-blue-800 mt-3 p-2 bg-blue-100 rounded">
                💡 타이브레이크에서는 <strong>포인트가 그냥 숫자</strong>로 표시됩니다!
              </p>
            </div>
          </div>

          {/* Tiebreaker Serve Order and Court Change */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">🎾 타이브레이크 서브 순서 및 코트 체인지</h3>
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
              <p className="font-semibold text-purple-900 mb-4">
                복식 타이브레이크의 서브 순서: A → B → C → D → A...
              </p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-2">📌 코트 체인지 규칙</p>
                  <p className="text-sm text-gray-700">
                    타이브레이크에서는 <span className="font-bold">양팀 총합 포인트가 6점일 때</span> 코트를 바꿉니다.
                  </p>
                  <p className="text-sm text-gray-700 mt-2 ml-4">
                    예: 0-0 → 2-0 (아직) → 2-2 → 4-2 (아직) → 4-4 → 6-4 <span className="font-bold text-red-600">(코트 체인지!)</span>
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-2">🧮 계산 방법</p>
                  <p className="text-sm text-gray-700">
                    A팀 포인트 + C팀 포인트 = 6이 되면 코트를 바꿉니다.
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    (B팀과 D팀의 포인트는 계산에 포함되지 않습니다)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tiebreaker Simulator */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">🎮 타이브레이크 시뮬레이터</h3>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <p className="text-sm opacity-90 mb-2">A+B 팀</p>
                  <p className="text-5xl font-bold">{tbPoints.a}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-2xl font-bold">-</p>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-2">C+D 팀</p>
                  <p className="text-5xl font-bold">{tbPoints.b}</p>
                </div>
              </div>
              <div className="text-center text-lg font-semibold">
                <p>양팀 총합: <span className="text-2xl">{tbPoints.a + tbPoints.b}</span> 포인트</p>
                {(tbPoints.a + tbPoints.b) % 6 === 0 && tbPoints.a + tbPoints.b > 0 && (
                  <p className="text-yellow-200 mt-2">⚠️ 코트 체인지 지점!</p>
                )}
              </div>
            </div>

            {winner ? (
              <div className="bg-green-100 border-2 border-green-500 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-700">{winner}</p>
                <p className="text-sm text-green-600 mt-2">타이브레이크 게임 종료!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setTbPoints(prev => ({ ...prev, a: prev.a + 1 }))}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
                >
                  A+B 포인트
                </button>
                <button
                  onClick={() => setTbPoints(prev => ({ ...prev, b: prev.b + 1 }))}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg"
                >
                  C+D 포인트
                </button>
              </div>
            )}

            {(tbPoints.a > 0 || tbPoints.b > 0) && (
              <button
                onClick={() => setTbPoints({ a: 0, b: 0 })}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
              >
                초기화
              </button>
            )}
          </div>

          {/* Winning Conditions */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">🏆 타이브레이크 승리 조건</h3>
            <div className="space-y-2">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-900">7포인트 이상 + 2포인트 차이</p>
                <p className="text-sm text-gray-700 mt-1">
                  예: 7-5, 7-4, 8-6, 9-7 등 → 세트 승리!
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900">6-6 동점에서는?</p>
                <p className="text-sm text-gray-700 mt-1">
                  계속 진행됩니다. 한 팀이 2포인트 차이를 낼 때까지!
                </p>
              </div>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">📝 타이브레이크 실전 예시</h3>
            <div className="space-y-2">
              <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900">상황 1: 7-4</p>
                <p className="text-sm text-gray-700 mt-1">→ 7포인트 이상 + 3포인트 차이 = <span className="font-bold">세트 승리!</span></p>
              </div>
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900">상황 2: 6-6</p>
                <p className="text-sm text-gray-700 mt-1">→ 2포인트 차이 없음 = <span className="font-bold">계속 진행</span></p>
              </div>
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                <p className="font-semibold text-green-900">상황 3: 10-8</p>
                <p className="text-sm text-gray-700 mt-1">→ 7포인트 이상 + 2포인트 차이 = <span className="font-bold">세트 승리!</span></p>
              </div>
            </div>
          </div>

          {/* Final Tips */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 초보자 팁:</span> 동호인 경기에서는 5:5일 때 타이브레이크가 시작됩니다. 
              타이브레이크 중 양팀 총합 6포인트가 되면 코트를 바꾼다는 것만 기억하세요!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
