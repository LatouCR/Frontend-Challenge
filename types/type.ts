interface UrlData {
  id: number;
  full_url: string;
  title: string | null;
  click_count: number;
}

export interface UrlType{
  id: number;
  full_url: string;
  title: string | null;
  click_count: number;
}

export interface ShortCodeResponse {
    short_code: string;
}

export interface FetchedData {
  urls: UrlData[];
}
