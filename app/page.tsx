'use client';

import { useState, useCallback, memo } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Theme from './theme';

/**
 * 
 * キーボードコンポーネント
 * @param props.layout 
 *    キー配置。一列分のキー配置を表す配列をネストしたもの。
 * @param props.onKeyPress
 *    キーが押された際の処理。
 */
const Keyboard = memo(function Keyboard(props: {
    layout: Array<Array<string>>,
    onKeyPress: (key: string) => void,
}) {
    return (
      <Box
       sx={theme => ({
         bgcolor: theme.palette.lightgray,
         position: 'fixed',
         height: '50vh',
         width: '100vw',
         bottom: 0,
       })}
      >
        { /* キーボードに含まれる列のコンテナ */ }
        <Grid 
         container
         direction="column"
         spacing={2}
         margin="5%"
        >
          {
            // 列を生成
            props.layout.map((keys, idx) => (
              <Grid
               container
               spacing={2}
               size={12}
               key={`[${keys}]-${idx}`}
              >
                {
                  // キーを生成
                  keys.map((key, idx) => (
                    <Grid size="grow" key={`${key}-${idx}`} >
                      <Button
                       onClick={() => props.onKeyPress(key)}
                       key={`btn-${key}-${idx}`}
                       fullWidth
                       sx={theme => ({
                         color: theme.palette.text.primary,
                         bgcolor: theme.palette.invertableWhite,
                         padding: theme.spacing(2),
                         textAlign: "center",
                         textTransform: "none",
                       })}
                      >
                        {key}
                      </Button>
                    </Grid>
                  ))
                }
              </Grid>
            ))
          }
        </Grid>
    </Box>
  );
});

export default function App() {
    //　入力された文字列を保持するState
    const [text, setText] = useState('');

    const layout = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['h', 'i', 'j'],
    ];
    const onKeyPress = useCallback((key: string) => {
        setText(prev => prev + key);
    }, [setText]);

    /** 
     * <Theme>をlayout.tsxに含めようとすると、SSRの過程でエラーが発生する
     * Themeで使っているMUIのcreateTheme()関数は関数を返すため、サーバー側では使えないのが原因
     */
    return (
        <Theme>
          <p>{text}</p>
          <Keyboard
           layout={layout}
           onKeyPress={onKeyPress}
          />
        </Theme>
    );
}
