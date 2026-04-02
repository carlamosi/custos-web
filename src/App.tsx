import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Producte from "./pages/Producte.tsx";
import ImpactePage from "./pages/ImpactePage.tsx";
import QuiSom from "./pages/QuiSom.tsx";
import ComHoHemFet from "./pages/ComHoHemFet.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/producte" element={<Producte />} />
          <Route path="/impacte" element={<ImpactePage />} />
          <Route path="/qui-som" element={<QuiSom />} />
          <Route path="/com-ho-hem-fet" element={<ComHoHemFet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
