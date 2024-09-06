import { Watch } from "react-loader-spinner";

export default function FullPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Watch
        visible={true}
        color="#e79418"
        height={100}
        width={100}
        ariaLabel="Carregando..."
      />
    </div>
  );
}
