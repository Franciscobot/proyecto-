<script>
    function convert() {
        const conversionType = document.getElementById("conversionType").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        let result = 0;

        if (isNaN(inputValue)) {
            document.getElementById("result").textContent = "Por favor, introduce un número válido.";
            return;
        }

        // Lógica de conversión
        if (conversionType === "c_to_f") {
            result = (inputValue * 9/5) + 32;
        } else if (conversionType === "f_to_c") {
            result = (inputValue - 32) * 5/9;
        } else if (conversionType === "m_to_ft") {
            result = inputValue * 3.28084;
        } else if (conversionType === "ft_to_m") {
            result = inputValue / 3.28084;
        } else if (conversionType === "kg_to_lb") {
            result = inputValue * 2.20462;
        } else if (conversionType === "lb_to_kg") {
            result = inputValue / 2.20462;
        }

        document.getElementById("result").textContent = "Resultado: " + result.toFixed(2);
    }
</script>
<script>
    function convert() {
        const conversionType = document.getElementById("conversionType").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        let result = 0;

        // Validación de entrada de datos
        if (isNaN(inputValue)) {
            document.getElementById("result").textContent = "Por favor, introduce un número válido.";
            return;
        }

        // Lógica de conversión
        switch(conversionType) {
            case "c_to_f":
                result = (inputValue * 9/5) + 32;
                break;
            case "f_to_c":
                result = (inputValue - 32) * 5/9;
                break;
            case "m_to_ft":
                result = inputValue * 3.28084;
                break;
            case "ft_to_m":
                result = inputValue / 3.28084;
                break;
            case "kg_to_lb":
                result = inputValue * 2.20462;
                break;
            case "lb_to_kg":
                result = inputValue / 2.20462;
                break;
        }

        // Mostrar el resultado con 2 decimales
        document.getElementById("result").textContent = "Resultado: " + result.toFixed(2);
    }
</script>
