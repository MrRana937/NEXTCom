export default function AuthSocial({ providers }: { providers: any }) {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-4">
        {providers.map((provider: any) => (
          <button
            key={provider.id}
            className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
              transition-all duration-200 hover:scale-110"
            aria-label={`Sign in with ${provider.name}`}
          >
            <img
              src={`/icons/${provider.id}.png`}
              alt={provider.name}
              className="w-8 h-8 object-contain" // Increased icon size
            />
          </button>
        ))}
      </div>
    </div>
  )
}
