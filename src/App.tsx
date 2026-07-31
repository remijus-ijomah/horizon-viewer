import AppLayout from "./components/layout/AppLayout";
import { ViewerCanvas } from "./features/scene";

function App() {
  return (
    <AppLayout>
      <ViewerCanvas/>
    </AppLayout>
  );
}

export default App;
