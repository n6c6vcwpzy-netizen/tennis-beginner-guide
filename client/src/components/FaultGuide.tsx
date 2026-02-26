import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function FaultGuide() {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-2xl">2️⃣ 서브 폴트 완벽 가이드</CardTitle>
          <CardDescription>
            서브는 테니스 경기의 시작입니다. 폴트 상황을 정확히 이해하세요!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Fault Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">🚫 3가지 폴트 상황</h3>

            {/* Foot Fault */}
            <div className="bg-orange-50 border-2 border-orange-300 p-4 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 text-lg">풋폴트 (Foot Fault)</h4>
                  <p className="text-sm text-orange-700 mt-1">서브할 때 라인을 밟는 실수</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-orange-200 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">❌ 풋폴트가 되는 경우:</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>• 베이스라인을 밟고 서브하는 경우</li>
                    <li>• 센터마크의 연장선을 넘어서 서브하는 경우</li>
                    <li>• 사이드라인의 연장선을 넘어서 서브하는 경우</li>
                    <li>• 서브 스윙 전에 라인을 밟는 경우</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <p className="font-semibold text-green-900 mb-1">✅ 괜찮은 경우:</p>
                  <p className="text-sm text-green-800">서브 스윙 후에 라인을 밟는 것은 괜찮습니다!</p>
                </div>
              </div>
            </div>

            {/* Double Fault */}
            <div className="bg-red-50 border-2 border-red-400 p-4 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 text-lg">더블폴트 (Double Fault)</h4>
                  <p className="text-sm text-red-700 mt-1">서브 기회 2번을 모두 실패하는 경우</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-red-200 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">📋 서브 기회:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">1</span>
                      <span><strong>퍼스트 서브:</strong> 첫 번째 시도</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold">2</span>
                      <span><strong>세컨드 서브:</strong> 두 번째 시도</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-100 p-3 rounded border border-red-300">
                  <p className="font-semibold text-red-900 mb-1">⚠️ 더블폴트의 결과:</p>
                  <p className="text-sm text-red-800">상대방이 <span className="font-bold">1포인트를 획득</span>합니다!</p>
                </div>
              </div>
            </div>

            {/* Let */}
            <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 text-lg">렛 (Let)</h4>
                  <p className="text-sm text-blue-700 mt-1">다시 하라는 신호 - 포인트를 다시 시작합니다</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">🔄 렛이 선언되는 경우:</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>• 서브가 <strong>네트를 맞고</strong> 서비스 박스 안에 들어간 경우</li>
                    <li>• 경기 중 옆 코트에서 공이 넘어온 경우</li>
                    <li>• 경기 중 동물이 코트에 들어온 경우</li>
                    <li>• 서브 중 공이 터지는 경우</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-3 rounded border border-blue-300">
                  <p className="font-semibold text-blue-900 mb-1">📌 중요!</p>
                  <p className="text-sm text-blue-800">
                    서브 렛은 <strong>해당 서브만 다시</strong> 진행합니다. 
                    (퍼스트 서브에 렛 → 퍼스트 서브 재진행)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Box Diagram */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">📐 복식 코트 구성 및 서브 위치</h3>
            <div className="bg-gradient-to-b from-green-100 to-green-50 p-6 rounded-lg border-2 border-green-400">
              <img src="/테니스 코트 사진.png" alt="Tennis Doubles Court Diagram" className="w-full rounded-lg mb-4" />
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-semibold">✅ 복식 포지셔닝:</p>
                <p className="ml-4">• A+B 팀: 파란색 위치에서 경기</p>
                <p className="ml-4">• C+D 팀: 빨간색 위치에서 경기</p>
                <p className="ml-4">• 각 팀의 두 선수는 네트 근처에 위치하여 공격 준비</p>
              </div>
            </div>
          </div>

          {/* Serve Position Diagram */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">🎾 올바른 서브 자세 및 풋폴트</h3>
            <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-400">
              <img src="/테니스 서브 사진.jpg" alt="Tennis Serve Position and Foot Fault Rules" className="w-full rounded-lg" />
            </div>
          </div>

          {/* Practical Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">🎯 실전 상황 정리</h3>
            <div className="space-y-2">
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                <p className="font-semibold text-green-900">상황 1: 퍼스트 서브 폴트</p>
                <p className="text-sm text-gray-700 mt-1">→ 세컨드 서브 기회가 주어집니다</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-900">상황 2: 퍼스트 서브 렛</p>
                <p className="text-sm text-gray-700 mt-1">→ 퍼스트 서브를 다시 진행합니다</p>
              </div>
              <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                <p className="font-semibold text-red-900">상황 3: 퍼스트 폴트 + 세컨드 폴트</p>
                <p className="text-sm text-gray-700 mt-1">→ 더블폴트! 상대방이 1포인트 획득</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">💡 초보자 팁:</span> 처음에는 세컨드 서브를 안전하게 넣는 것이 중요합니다. 
              더블폴트를 피하려면 세컨드 서브는 천천히, 정확하게 넣으세요!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
