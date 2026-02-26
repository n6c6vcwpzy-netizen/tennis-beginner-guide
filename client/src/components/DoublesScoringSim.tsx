import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const POINT_NAMES = ['러브', '피프틴', '써티', '포티'];
const POINT_VALUES = [0, 15, 30, 40];

export default function DoublesScoringSim() {
  const [teamABPoints, setTeamABPoints] = useState(0);
  const [teamCDPoints, setTeamCDPoints] = useState(0);
  const [gameHistory, setGameHistory] = useState<string[]>([]);

  const getScoreDisplay = (ab: number, cd: number) => {
    if (ab < 3 && cd < 3) {
      return `${POINT_NAMES[ab]} - ${POINT_NAMES[cd]}`;
    }
    if (ab === 3 && cd === 3) {
      return '듀스';
    }
    if (ab > 3 && cd === 3) {
      return 'A+B 팀 어드밴티지';
    }
    if (ab === 3 && cd > 3) {
      return 'C+D 팀 어드밴티지';
    }
    if (ab > 3 && cd < 3) {
      return 'A+B 팀 어드밴티지';
    }
    if (ab < 3 && cd > 3) {
      return 'C+D 팀 어드밴티지';
    }
    return '';
  };

  const getGameWinner = (ab: number, cd: number) => {
    if (ab >= 4 && ab - cd === 2) {
      return 'A+B 팀 게임 승리! 🎉';
    }
    if (cd >= 4 && cd - ab === 2) {
      return 'C+D 팀 게임 승리! 🎉';
    }
    return null;
  };

  const getCurrentServer = () => {
    const totalPoints = teamABPoints + teamCDPoints;
    // 복식 서브 순서: A → B → C → D → A → B → C → D...
    const servers = ['A', 'B', 'C', 'D'];
    return servers[totalPoints % 4];
  };

  const addPointAB = () => {
    if (!getGameWinner(teamABPoints, teamCDPoints)) {
      setTeamABPoints(teamABPoints + 1);
      setGameHistory([...gameHistory, `A+B 팀 포인트 획득 (${getScoreDisplay(teamABPoints + 1, teamCDPoints)})`]);
    }
  };

  const addPointCD = () => {
    if (!getGameWinner(teamABPoints, teamCDPoints)) {
      setTeamCDPoints(teamCDPoints + 1);
      setGameHistory([...gameHistory, `C+D 팀 포인트 획득 (${getScoreDisplay(teamABPoints, teamCDPoints + 1)})`]);
    }
  };

  const reset = () => {
    setTeamABPoints(0);
    setTeamCDPoints(0);
    setGameHistory([]);
  };

  const winner = getGameWinner(teamABPoints, teamCDPoints);

  return (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
            <p className="text-sm opacity-90 mb-2">A+B 팀</p>
            <p className="text-5xl font-bold">{POINT_VALUES[Math.min(teamABPoints, 3)]}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold">-</p>
          </div>
          <div className="bg-red-500 bg-opacity-50 p-4 rounded-lg">
            <p className="text-sm opacity-90 mb-2">C+D 팀</p>
            <p className="text-5xl font-bold">{POINT_VALUES[Math.min(teamCDPoints, 3)]}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold mb-3">{getScoreDisplay(teamABPoints, teamCDPoints)}</p>
          <p className="text-sm opacity-90">현재 서버: <span className="text-2xl font-bold">{getCurrentServer()}</span> 선수</p>
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
            아래 버튼을 눌러 포인트를 추가하고 복식 경기의 점수 변화를 보세요!
          </p>
        </div>
      )}

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={addPointAB}
          disabled={!!winner}
          className="h-16 text-lg font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          A+B 포인트
        </Button>
        <Button
          onClick={addPointCD}
          disabled={!!winner}
          className="h-16 text-lg font-bold bg-red-600 hover:bg-red-700 disabled:opacity-50"
        >
          C+D 포인트
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

      {/* Server Rotation Info */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
        <p className="font-semibold text-purple-900 mb-2">📌 복식 서브 순서</p>
        <p className="text-sm text-gray-700">
          복식에서는 각 게임마다 서브 순서가 정해져 있습니다: <span className="font-bold">A → B → C → D → A...</span>
        </p>
        <p className="text-sm text-gray-700 mt-2">
          현재 포인트 수에 따라 서버가 자동으로 변경됩니다.
        </p>
      </div>

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
          <span className="font-bold">💡 팁:</span> 복식에서는 한 팀의 두 선수가 번갈아가며 서브합니다. 
          각 선수가 서브할 때마다 상대팀의 다른 선수가 리시브합니다!
        </p>
      </div>
    </div>
  );
}
