import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const POINT_NAMES = ['러브', '피프틴', '써티', '포티'];
const POINT_VALUES = [0, 15, 30, 40];

export default function ScoringSim() {
  const [playerAPoints, setPlayerAPoints] = useState(0);
  const [playerBPoints, setPlayerBPoints] = useState(0);
  const [gameHistory, setGameHistory] = useState<string[]>([]);

  const getScoreDisplay = (a: number, b: number) => {
    if (a < 3 && b < 3) {
      return `${POINT_NAMES[a]} - ${POINT_NAMES[b]}`;
    }
    if (a === 3 && b === 3) {
      return '듀스';
    }
    if (a > 3 && b === 3) {
      return 'A 선수 어드밴티지';
    }
    if (a === 3 && b > 3) {
      return 'B 선수 어드밴티지';
    }
    if (a > 3 && b < 3) {
      return 'A 선수 어드밴티지';
    }
    if (a < 3 && b > 3) {
      return 'B 선수 어드밴티지';
    }
    return '';
  };

  const getGameWinner = (a: number, b: number) => {
    if (a >= 4 && a - b === 2) {
      return 'A 선수 게임 승리! 🎉';
    }
    if (b >= 4 && b - a === 2) {
      return 'B 선수 게임 승리! 🎉';
    }
    return null;
  };

  const addPointA = () => {
    if (!getGameWinner(playerAPoints, playerBPoints)) {
      setPlayerAPoints(playerAPoints + 1);
      setGameHistory([...gameHistory, `A 선수 포인트 획득 (${getScoreDisplay(playerAPoints + 1, playerBPoints)})`]);
    }
  };

  const addPointB = () => {
    if (!getGameWinner(playerAPoints, playerBPoints)) {
      setPlayerBPoints(playerBPoints + 1);
      setGameHistory([...gameHistory, `B 선수 포인트 획득 (${getScoreDisplay(playerAPoints, playerBPoints + 1)})`]);
    }
  };

  const reset = () => {
    setPlayerAPoints(0);
    setPlayerBPoints(0);
    setGameHistory([]);
  };

  const winner = getGameWinner(playerAPoints, playerBPoints);

  return (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm opacity-90 mb-2">A 선수</p>
            <p className="text-5xl font-bold">{POINT_VALUES[Math.min(playerAPoints, 3)]}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold">-</p>
          </div>
          <div>
            <p className="text-sm opacity-90 mb-2">B 선수</p>
            <p className="text-5xl font-bold">{POINT_VALUES[Math.min(playerBPoints, 3)]}</p>
          </div>
        </div>
        <div className="text-center mt-6 text-lg font-semibold">
          {getScoreDisplay(playerAPoints, playerBPoints)}
        </div>
      </div>

      {/* Game Status */}
      {winner ? (
        <div className="bg-green-100 border-2 border-green-500 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-green-700">{winner}</p>
          <p className="text-sm text-green-600 mt-2">게임을 다시 시작하려면 초기화 버튼을 클릭하세요.</p>
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            아래 버튼을 눌러 포인트를 추가하고 점수가 어떻게 변하는지 보세요!
          </p>
        </div>
      )}

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={addPointA}
          disabled={!!winner}
          className="h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          A 선수 포인트
        </Button>
        <Button
          onClick={addPointB}
          disabled={!!winner}
          className="h-16 text-lg font-bold bg-red-600 hover:bg-red-700 disabled:opacity-50"
        >
          B 선수 포인트
        </Button>
      </div>

      <Button
        onClick={reset}
        variant="outline"
        className="w-full"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        초기화
      </Button>

      {/* History */}
      {gameHistory.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3">📊 경기 진행 기록</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {gameHistory.map((entry, idx) => (
              <div key={idx} className="text-sm text-gray-700 p-2 bg-white rounded border border-gray-100">
                <span className="font-semibold text-gray-500">#{idx + 1}</span> {entry}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-bold">💡 팁:</span> 듀스(40-40) 상황에서 한 선수가 2포인트를 연속으로 따야 게임을 가져갑니다!
        </p>
      </div>
    </div>
  );
}
