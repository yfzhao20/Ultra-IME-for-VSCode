#NoTrayIcon
DetectHiddenWindows True
DefaultIMEWnd := DllCall("imm32\ImmGetDefaultIMEWnd", "Uint", winGetID("A") , "Uint")

; wParam list
; IMC_GETCONVERSIONMODE  0x0001
; IMC_SETCONVERSIONMODE  0x0002

SendMessage(
    0x283, ; Message : WM_IME_CONTROL
    0x002, ; wParam : IMC_SETCONVERSIONMODE
    0, ; 1025 - CN; 0 - EN
    , ; Control ： (Window)
    ; Retrieves the default window handle to the IME class.
    "ahk_id " DefaultIMEWnd
)



