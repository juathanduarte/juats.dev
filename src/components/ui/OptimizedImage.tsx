import { useEffect, useRef, useState } from "react";
import { PERFORMANCE_CONFIG } from "../../config/seo";

interface IOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  sizes = PERFORMANCE_CONFIG.images.sizes.project,
  priority = false,
  placeholder = PERFORMANCE_CONFIG.images.placeholder,
  onLoad,
  onError,
}: IOptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const getResponsiveSrcSet = (originalSrc: string): string => {
    if (import.meta.env.DEV) {
      return originalSrc;
    }

    const sizes = [320, 640, 768, 1024, 1280];
    const extension = originalSrc.split(".").pop();
    const baseName = originalSrc.replace(
      new RegExp(`\\.${extension}$`, "i"),
      ""
    );

    return sizes.map((size) => `${baseName}-${size}.webp ${size}w`).join(", ");
  };

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: PERFORMANCE_CONFIG.lazyLoading.rootMargin,
        threshold: PERFORMANCE_CONFIG.lazyLoading.threshold,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const responsiveSrcSet = getResponsiveSrcSet(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{ width, height }}
        >
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover opacity-30"
            aria-hidden="true"
          />
        </div>
      )}

      {hasError && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Ícone de erro"
            >
              <title>Erro ao carregar imagem</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Erro ao carregar imagem</p>
          </div>
        </div>
      )}

      {isInView && !hasError && (
        <picture>
          <source srcSet={responsiveSrcSet} sizes={sizes} type="image/webp" />

          <img
            src={src}
            srcSet={responsiveSrcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
