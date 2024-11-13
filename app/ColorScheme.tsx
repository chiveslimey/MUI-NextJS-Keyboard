'use client';

import { PaletteMode, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  createContext, 
  ReactNode, 
  useState, 
  useMemo, 
  useContext
} from 'react';

/**
 * Original source: 
 *   title: "【Next.js14】MUIで作る最強のライト・ダークモード構築 ※ちらつき対策あり", 
 *   author: 角口 翔(https://qiita.com/KadoProG),
 *   url: https://qiita.com/KadoProG/items/15ceebf1aef774690bdf
 *   viewed: 2024/11/13
 */

/**カラーモードの選択オプション */
export type ColorModeChoice = 'light' | 'dark' | 'device';

interface ColorModeContextType {
  /**選択中のカラーモード */
  selectedMode: ColorModeChoice;
  /**カラーモードを設定する関数 */
  toggleColorMode: (colorMode: ColorModeChoice) => void;
}

/**カラーモードのコンテキスト */
const ColorModeContext = createContext<ColorModeContextType>({
  selectedMode: 'light', // 仮の設定
  toggleColorMode: (colorMode: ColorModeChoice) => {
    colorMode; // 仮の設定
  },
});

/**MUIの設定プロバイダ */
export default function ColorScheme(props: { children: ReactNode }) {
  const initMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';

  // ユーザが選択しているカラーモード
  const [selectedMode, setSelectedMode] =
    useState<ColorModeChoice>('light');

  /** 適用されるカラーモードの設定 */
  const mode = useMemo<PaletteMode>(
    () => (selectedMode !== 'device' ? selectedMode : initMode),
    [initMode, selectedMode]
  );

  // コンテキストの指定（他のコンポーネントでも呼び出して使えるように）
  const colorMode = useMemo(
    () => ({
      selectedMode,
      toggleColorMode: (colorMode: ColorModeChoice) => {
        setSelectedMode(colorMode);
      },
    }),
    [selectedMode]
  );

  // カスタムシーン
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

/**ColorModeContextを簡単に使うためのユーティリティ関数 */
export function useColorModeContext(): ColorModeContextType {
  useContext(ColorModeContext);
}
