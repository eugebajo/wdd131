function calculateWindChill(temp, windSpeed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  }
  
  // Mostrar sensación térmica si aplica
  const windChillSpan = document.getElementById("windchill");
  
  if (tempC <= 10 && windKmh > 4.8) {
    windChillSpan.textContent = calculateWindChill(tempC, windKmh) + " °C";
  } else {
    windChillSpan.textContent = "N/A";
  }
  
  // Año actual y fecha de modificación
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modDate").textContent = document.lastModified;