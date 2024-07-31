        let codes = document.querySelectorAll(".code");

        codes.forEach((code, index) => {
            code.addEventListener("input", () => {
                if (code.value.length == 1) {
                    if (index < codes.length - 1) {
                        code.removeAttribute("focused");
                        codes[index + 1].focus();
                        codes[index + 1].setAttribute("focused", "");
                    }
                }
            });

            code.addEventListener("keydown", (e) => {
                if (e.key == "Backspace") {
                    if (index > 0 && code.value.length == 0) {
                        code.removeAttribute("focused");
                        codes[index - 1].focus();
                        codes[index - 1].setAttribute("focused", "");
                    }
                }
            });

            code.addEventListener("focus", () => {
                code.setAttribute("focused", "");
            });

            code.addEventListener("blur", () => {
                code.removeAttribute("focused");
            });
        });

        window.addEventListener('load', () => {
            codes[0].focus();
            codes[0].setAttribute("focused", "");
        });