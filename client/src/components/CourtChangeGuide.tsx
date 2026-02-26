import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function CourtChangeGuide() {
  const [selectedGame, setSelectedGame] = useState(0);

  const games = [
    { game: 1, totalGames: 1, shouldChange: true, reason: '1게임 = 홀수 게임' },
    { game: 2, totalGames: 3, shouldChange: false, reason: '2게임 = 짝수 게임' },
    { game: 3, totalGames: 3, shouldChange: true, reason: '3게임 = 홀수 게임' },
    { game: 4, totalGames: 7, shouldChange: false, reason: '4게임 = 짝수 게임' },
    { game: 5, totalGames: 7, shouldChange: true, reason: '5게임 = 홀수 게임' },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-purple-200">
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-2xl">3️⃣ 코트 체인지 규칙</CardTitle>
          <CardDescription>
            테니스에서 가장 헷갈리는 부분 중 하나입니다. 정확히 언제 코트를 바꾸는지 배워보세요!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Main Rule */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-900 mb-3">🔄 코트 체인지 규칙</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-lg font-bold text-purple-900 mb-2">홀수 게임이 끝났을 때!</p>
                <p className="text-gray-700">
                  1게임, 3게임, 5게임, 7게임... 이렇게 <strong>홀수 게임이 끝나면</strong> 코트를 바꿉니다.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-lg font-bold text-purple-900 mb-2">짝수 게임 후에는?</p>
                <p className="text-gray-700">
                  2게임, 4게임, 6게임... 이렇게 <strong>짝수 게임이 끝나면</strong> 코트를 바꾸지 않습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">📊 게임별 코트 체인지 시뮬레이션</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {games.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGame(idx)}
                    className={`px-4 py-2 rounded font-semibold text-sm whitespace-nowrap transition-all ${
                      selectedGame === idx
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {g.game}게임
                  </button>
                ))}
              </div>

              {/* Selected Game Info */}
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border-2 ${
                  games[selectedGame].shouldChange
                    ? 'bg-green-50 border-green-400'
                    : 'bg-blue-50 border-blue-400'
                }`}>
                  <p className="text-sm text-gray-600 mb-2">
                    {games[selectedGame].game}게임 종료 후
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">
                        {games[selectedGame].shouldChange ? '🔄 코트 체인지!' : '⏸️ 코트 유지'}
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        {games[selectedGame].reason}
                      </p>
                    </div>
                    <div className="text-4xl">
                      {games[selectedGame].shouldChange ? '✅' : '❌'}
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">왜 이렇게 할까요?</p>
                  <p className="text-sm text-gray-700">
                    {games[selectedGame].shouldChange
                      ? '햇빛, 바람 등 환경 요소가 한쪽에 유리할 수 있으니, 공평하게 하기 위해 홀수 게임마다 코트를 바꿉니다.'
                      : '짝수 게임 후에는 바로 다음 게임(홀수)이 시작되므로 코트를 바꾸지 않습니다.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Scenario */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">🎯 실전 시나리오</h3>
            <div className="space-y-2">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-900">상황 1: 1게임이 끝남</p>
                <p className="text-sm text-gray-700 mt-1">→ <span className="font-bold">코트 체인지!</span> 양쪽 선수가 반대편 코트로 이동</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900">상황 2: 2게임이 끝남</p>
                <p className="text-sm text-gray-700 mt-1">→ <span className="font-bold">코트 유지!</span> 그대로 3게임을 시작</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-900">상황 3: 3게임이 끝남</p>
                <p className="text-sm text-gray-700 mt-1">→ <span className="font-bold">코트 체인지!</span> 다시 반대편 코트로 이동</p>
              </div>
            </div>
          </div>

          {/* Tiebreaker Special Rule */}
          <div className="bg-orange-50 border-2 border-orange-400 p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-3">⚠️ 타이브레이크는 다릅니다!</h4>
            <p className="text-sm text-gray-700 mb-3">
              타이브레이크 게임에서는 <strong>짝수 포인트마다</strong> 코트를 바꿉니다.
            </p>
            <div className="bg-white p-3 rounded border border-orange-200 text-sm text-gray-700">
              <p>예: 0-0 → 2-0 (코트 체인지) → 2-2 (코트 체인지) → 4-2 (코트 체인지)</p>
            </div>
          </div>

          {/* Memory Trick */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 기억하기:</span> "홀수 게임 = 코트 체인지" 
              이 한 문장만 기억하면 됩니다! 1게임, 3게임, 5게임... 홀수 게임이 끝나면 무조건 코트를 바꾼다고 생각하세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
