export default function PhotoSlider() {
    const slides = [
        {
          url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        },
        {
          url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2670&q=80",
        },
        {
          url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2672&q=80",
        },
        {
          url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2253&q=80",
        },
        {
          url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2671&q=80",
        },
      ];

      return (
            <div className="pb-5 px-3">
                <div className="flex gap-x-3 snap-x overflow-x-hidden hover:overflow-x-auto w-full scroll-pl-10">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 snap-center">
                            <img src={slide.url} className="rounded-lg h-72 min-w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
    );
}