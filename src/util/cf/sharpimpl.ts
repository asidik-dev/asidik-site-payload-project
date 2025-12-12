import { SharpDependency } from 'payload'
import sharp, { OutputInfo, ResizeOptions, Stats } from 'sharp'
import { ArrayOptions, Readable } from 'stream'
import { EventEmitter } from 'node:events'
import { undefined } from 'zod'

type CFImageResponse = {
  metaData: sharp.Metadata // metadata from sharp
  imageData: {
    image: {
      type: 'Buffer'
      data: number[] // array of bytes
    }
    outputInfo: sharp.OutputInfo // info returned by sharp.toBuffer({ resolveWithObject: true })
  }
}

class CFSharpImpl implements sharp.Sharp {
  private input:
    | ArrayBuffer
    | Buffer
    | Float32Array
    | Float64Array
    | Int8Array
    | Int16Array
    | Int32Array
    | string
    | Uint8Array
    | Uint8ClampedArray
    | Uint16Array
    | Uint32Array
  private options: sharp.SharpOptions

  private resizeWidthOrOptions: number | sharp.ResizeOptions
  private resizeHeight: number
  private resizeOptions: sharp.ResizeOptions
  private trimOptions: sharp.TrimOptions
  private targetFormat:
    | 'avif'
    | 'dcraw'
    | 'dz'
    | 'exr'
    | 'fits'
    | 'gif'
    | 'heif'
    | 'input'
    | 'jpeg'
    | 'jpg'
    | 'jp2'
    | 'jxl'
    | 'magick'
    | 'openslide'
    | 'pdf'
    | 'png'
    | 'ppm'
    | 'rad'
    | 'raw'
    | 'svg'
    | 'tiff'
    | 'tif'
    | 'v'
    | 'webp'
    | sharp.AvailableFormatInfo
  private targetFormatOptions:
    | sharp.OutputOptions
    | sharp.JpegOptions
    | sharp.PngOptions
    | sharp.WebpOptions
    | sharp.AvifOptions
    | sharp.HeifOptions
    | sharp.JxlOptions
    | sharp.GifOptions
    | sharp.Jp2Options
    | sharp.RawOptions
    | sharp.TiffOptions
  private extractRegion: sharp.Region

  private convertedMetadata: boolean
  private convertedBuffer: boolean

  private conversionError: Error
  private metaData: sharp.Metadata

  private outputInfo: sharp.OutputInfo
  private outputBuffer: Buffer

  constructor(
    input?:
      | ArrayBuffer
      | Buffer
      | Float32Array
      | Float64Array
      | Int8Array
      | Int16Array
      | Int32Array
      | string
      | Uint8Array
      | Uint8ClampedArray
      | Uint16Array
      | Uint32Array,
    options?: sharp.SharpOptions,
  ) {
    this.input = input
    this.options = options
  }

  extractChannel(channel: 0 | 1 | 2 | 3 | 'red' | 'green' | 'blue' | 'alpha'): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  joinChannel(
    images: string | Buffer | ArrayLike<string | Buffer>,
    options?: sharp.SharpOptions,
  ): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  bandbool(boolOp: keyof sharp.BoolEnum): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  tint(tint: sharp.Colour | sharp.Color): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  greyscale(greyscale?: boolean): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  grayscale(grayscale?: boolean): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  pipelineColourspace(colourspace?: string): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  pipelineColorspace(colorspace?: string): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  toColourspace(colourspace?: string): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  toColorspace(colorspace: string): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  composite(images: sharp.OverlayOptions[]): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  clone(): sharp.Sharp {
    return new CFSharpImpl(this.input, this.options)
  }

  keepMetadata(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  stats(callback: (err: Error, stats: Stats) => void): sharp.Sharp

  stats(): Promise<Stats>

  stats(callback?: unknown): sharp.Sharp | Promise<sharp.Stats> {
    throw new Error('Method not implemented.')
  }

  autoOrient(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  flip(flip?: boolean): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  flop(flop?: boolean): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  affine(
    matrix: [number, number, number, number] | sharp.Matrix2x2,
    options?: sharp.AffineOptions,
  ): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  sharpen(sigma?: unknown, flat?: unknown, jagged?: unknown): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  median(size?: number): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  blur(sigma?: number | boolean | sharp.BlurOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  dilate(width?: number): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  erode(width?: number): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  flatten(flatten?: boolean | sharp.FlattenOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  unflatten(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  gamma(gamma?: number, gammaOut?: number): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  negate(negate?: boolean | sharp.NegateOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  normalise(normalise?: sharp.NormaliseOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  normalize(normalize?: sharp.NormaliseOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  clahe(options: sharp.ClaheOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  convolve(kernel: sharp.Kernel): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  threshold(threshold?: number, options?: sharp.ThresholdOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  boolean(
    operand: string | Buffer,
    operator: keyof sharp.BoolEnum,
    options?: { raw: sharp.Raw },
  ): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  linear(a?: number | number[] | null, b?: number | number[]): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  recomb(inputMatrix: sharp.Matrix3x3 | sharp.Matrix4x4): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  modulate(options?: {
    brightness?: number | undefined
    saturation?: number | undefined
    hue?: number | undefined
    lightness?: number | undefined
  }): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  toFile(fileOut: string, callback: (err: Error, info: OutputInfo) => void): sharp.Sharp

  toFile(fileOut: string): Promise<OutputInfo>

  toFile(fileOut: unknown, callback?: unknown): sharp.Sharp | Promise<sharp.OutputInfo> {
    throw new Error('Method not implemented.')
  }

  keepExif(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  withExif(exif: sharp.Exif): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  withExifMerge(exif: sharp.Exif): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  keepIccProfile(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  withIccProfile(icc: string, options?: sharp.WithIccProfileOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  keepXmp(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  withXmp(xmp: string): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  jpeg(options?: sharp.JpegOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  jp2(options?: sharp.Jp2Options): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  jxl(options?: sharp.JxlOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  png(options?: sharp.PngOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  webp(options?: sharp.WebpOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  gif(options?: sharp.GifOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  avif(options?: sharp.AvifOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  heif(options?: sharp.HeifOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  tiff(options?: sharp.TiffOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  raw(options?: sharp.RawOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  resize(
    widthOrOptions?: number | ResizeOptions | null,
    height?: number | null,
    options?: ResizeOptions,
  ): sharp.Sharp {
    this.resizeWidthOrOptions = widthOrOptions
    this.resizeHeight = height
    this.resizeOptions = options
    return this as sharp.Sharp
  }

  trim(options?: sharp.TrimOptions): sharp.Sharp {
    this.trimOptions = options
    return this as sharp.Sharp
  }

  toFormat(
    format: keyof sharp.FormatEnum | sharp.AvailableFormatInfo,
    options?:
      | sharp.OutputOptions
      | sharp.JpegOptions
      | sharp.PngOptions
      | sharp.WebpOptions
      | sharp.AvifOptions
      | sharp.HeifOptions
      | sharp.JxlOptions
      | sharp.GifOptions
      | sharp.Jp2Options
      | sharp.RawOptions
      | sharp.TiffOptions,
  ): sharp.Sharp {
    this.targetFormat = format
    this.targetFormatOptions = options
    return this as sharp.Sharp
  }

  metadata(callback: (err: Error, metadata: sharp.Metadata) => void): sharp.Sharp
  metadata(): Promise<sharp.Metadata>

  // 2. Single implementation
  metadata(
    callback?: (err: Error, metadata: sharp.Metadata) => void,
  ): Promise<sharp.Metadata> | sharp.Sharp {
    if (callback) {
      return this as unknown as sharp.Sharp // for chaining
    } else {
      // Promise path: wrap in promise
      return new Promise(async (resolve, reject) => {
        if (this.convertedMetadata) {
          if (this.errored) {
            reject(this.errored)
          } else {
            resolve(this.metaData)
          }
        } else {
          await this.doConvert()
          this.convertedMetadata = true

          if (this.errored) {
            reject(this.errored)
          } else {
            resolve(this.metaData)
          }
        }
      })
    }
  }

  convertBuffer(
    inputToConvert:
      | ArrayBuffer
      | Buffer
      | Float32Array
      | Float64Array
      | Int8Array
      | Int16Array
      | Int32Array
      | string
      | Uint8Array
      | Uint8ClampedArray
      | Uint16Array
      | Uint32Array,
  ) {
    if (typeof inputToConvert === 'string') {
      // Already a string (filepath or base64)
      return { input: inputToConvert, inputType: 'string' }
    }

    // All the typed arrays and Buffer
    let buffer: Buffer

    if (Buffer.isBuffer(inputToConvert)) {
      buffer = inputToConvert
    } else if (inputToConvert instanceof ArrayBuffer) {
      buffer = Buffer.from(inputToConvert)
    } else {
      // All TypedArrays (Uint8Array, Float32Array, etc.)
      buffer = Buffer.from(
        inputToConvert.buffer,
        inputToConvert.byteOffset,
        inputToConvert.byteLength,
      )
    }

    return {
      input: buffer.toString('base64'),
      inputType: 'base64',
    }
  }

  async base64ToBuffer(base64String: string): Promise<Buffer> {
    return Buffer.from(base64String, 'base64')
  }

  convertToBuffer(
    input:
      | ArrayBuffer
      | Buffer
      | Float32Array
      | Float64Array
      | Int8Array
      | Int16Array
      | Int32Array
      | string
      | Uint8Array
      | Uint8ClampedArray
      | Uint16Array
      | Uint32Array,
  ): Buffer {
    // Already a Buffer
    if (Buffer.isBuffer(input)) {
      return input
    }

    // String
    if (typeof input === 'string') {
      return Buffer.from(input, 'utf8')
    }

    // ArrayBuffer
    if (input instanceof ArrayBuffer) {
      return Buffer.from(input)
    }

    // TypedArray (Uint8Array, Int32Array, etc.)
    if (ArrayBuffer.isView(input)) {
      return Buffer.from(input.buffer, input.byteOffset, input.byteLength)
    }

    throw new Error('Unsupported input type')
  }

  async doConvert() {
    try {
      const token = '8CZ46ToRDCNkjLhQ9WfULby4TVMjjPcF7CcjSzSf'

      const options = {
        trimOptions: this.trimOptions,
        targetFormat: this.targetFormat,
        targetFormationOptions: this.targetFormatOptions,
        sharpOptions: this.options,
        resizeOptions: this.resizeOptions,
        resizeHeight: this.resizeHeight,
        resizeWidthOrOptions: this.resizeWidthOrOptions,
        extractRegion: this.extractRegion,
        input: this.convertBuffer(this.input),
      }

      console.log('Trying to convert')
      const payload = JSON.stringify(options)
      const fileResult = await fetch(
        `https://cf-sharp-container-worker.tomwojciechowski.workers.dev`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: payload,
        },
      )

      const jsonResponse = await fileResult.json<CFImageResponse>()

      console.log("Got the resposne", jsonResponse)

      this.metaData = jsonResponse.metaData
      this.outputBuffer = Buffer.from(jsonResponse.imageData.image.data)
      this.outputInfo = jsonResponse.imageData.outputInfo
      console.log("finished")
    } catch (error) {
      console.log("oopsi", error)
    }
  }

  withMetadata(withMetadata?: sharp.WriteableMetadata): sharp.Sharp {
    return this as sharp.Sharp
  }

  toBuffer(callback: (err: Error, buffer: Buffer, info: OutputInfo) => void): sharp.Sharp

  toBuffer(options?: { resolveWithObject: false }): Promise<Buffer>

  toBuffer(options: { resolveWithObject: true }): Promise<{ data: Buffer; info: OutputInfo }>

  toBuffer(
    optionsOrCallback?:
      | { resolveWithObject?: boolean }
      | ((err: Error, buffer: Buffer, info: OutputInfo) => void),
  ): sharp.Sharp | Promise<Buffer> | Promise<{ data: Buffer; info: OutputInfo }> {
    // Implementation would check:
    if (typeof optionsOrCallback === 'function') {
      // callback path - return this for chaining
      return this as sharp.Sharp
    } else {
      // promise path - return promise based on options

      if (this.convertedBuffer) {
        if (optionsOrCallback?.resolveWithObject) {
          return Promise.resolve({ data: this.outputBuffer, info: this.outputInfo })
        }
        return Promise.resolve(this.outputBuffer)
      } else {
        if (optionsOrCallback?.resolveWithObject) {
          return new Promise<{ data: Buffer; info: OutputInfo }>(async (resolve, reject) => {
            await this.doConvert()
            this.convertedBuffer = true

            resolve({ data: this.outputBuffer, info: this.outputInfo })
          })
        } else {
          return new Promise<Buffer>(async (resolve, reject) => {
            await this.doConvert()
            this.convertedBuffer = true

            resolve(this.outputBuffer)
          })
        }
      }
    }
  }

  rotate(angle?: number, options?: sharp.RotateOptions): sharp.Sharp {
    return this as sharp.Sharp
  }

  tile(tile?: sharp.TileOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  timeout(options: sharp.TimeoutOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  extend(extend: number | sharp.ExtendOptions): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  extract(region: sharp.Region): sharp.Sharp {
    this.extractRegion = region
    return this as sharp.Sharp
  }

  allowHalfOpen: boolean
  addListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  emit(event: unknown, src?: unknown, ...rest: unknown[]): boolean {
    throw new Error('Method not implemented.')
  }
  on(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  once(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  prependListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  prependOnceListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  removeListener(event: unknown, listener: unknown): this {
    throw new Error('Method not implemented.')
  }
  pipe<T extends NodeJS.WritableStream>(
    destination: T,
    options?: { end?: boolean | undefined },
  ): T {
    throw new Error('Method not implemented.')
  }
  compose<T extends NodeJS.ReadableStream>(
    stream: T | ((source: any) => void) | Iterable<T> | AsyncIterable<T>,
    options?: { signal: AbortSignal },
  ): T {
    throw new Error('Method not implemented.')
  }
  [EventEmitter.captureRejectionSymbol]?<K>(
    error: Error,
    event: string | symbol,
    ...args: any[]
  ): void {
    throw new Error('Method not implemented.')
  }
  off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error('Method not implemented.')
  }
  removeAllListeners(eventName?: string | symbol): this {
    throw new Error('Method not implemented.')
  }
  setMaxListeners(n: number): this {
    throw new Error('Method not implemented.')
  }
  getMaxListeners(): number {
    throw new Error('Method not implemented.')
  }
  eventNames(): (string | symbol)[] {
    throw new Error('Method not implemented.')
  }
  readableAborted: boolean
  readable: boolean
  readableDidRead: boolean
  readableEncoding: BufferEncoding
  readableEnded: boolean
  readableFlowing: boolean
  readableHighWaterMark: number
  readableLength: number
  readableObjectMode: boolean
  destroyed: boolean
  closed: boolean
  errored: Error
  _construct?(callback: (error?: Error | null) => void): void {
    throw new Error('Method not implemented.')
  }
  _read(size: number): void {
    throw new Error('Method not implemented.')
  }
  read(size?: number) {
    throw new Error('Method not implemented.')
  }
  setEncoding(encoding: BufferEncoding): this {
    throw new Error('Method not implemented.')
  }
  pause(): this {
    throw new Error('Method not implemented.')
  }
  resume(): this {
    throw new Error('Method not implemented.')
  }
  isPaused(): boolean {
    throw new Error('Method not implemented.')
  }
  unpipe(destination?: NodeJS.WritableStream): this {
    throw new Error('Method not implemented.')
  }
  unshift(chunk: any, encoding?: BufferEncoding): void {
    throw new Error('Method not implemented.')
  }
  wrap(stream: NodeJS.ReadableStream): this {
    throw new Error('Method not implemented.')
  }
  push(chunk: any, encoding?: BufferEncoding): boolean {
    throw new Error('Method not implemented.')
  }
  iterator(options?: { destroyOnReturn?: boolean }): NodeJS.AsyncIterator<any> {
    throw new Error('Method not implemented.')
  }
  map(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => any,
    options?: ArrayOptions,
  ): Readable {
    throw new Error('Method not implemented.')
  }
  filter(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => boolean | Promise<boolean>,
    options?: ArrayOptions,
  ): Readable {
    throw new Error('Method not implemented.')
  }
  forEach(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => void | Promise<void>,
    options?: ArrayOptions,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  toArray(options?: Pick<ArrayOptions, 'signal'>): Promise<any[]> {
    throw new Error('Method not implemented.')
  }
  some(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => boolean | Promise<boolean>,
    options?: ArrayOptions,
  ): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  find<T>(fn: unknown, options?: unknown): Promise<T> | Promise<any> {
    throw new Error('Method not implemented.')
  }
  every(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => boolean | Promise<boolean>,
    options?: ArrayOptions,
  ): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  flatMap(
    fn: (data: any, options?: Pick<ArrayOptions, 'signal'>) => any,
    options?: ArrayOptions,
  ): Readable {
    throw new Error('Method not implemented.')
  }
  drop(limit: number, options?: Pick<ArrayOptions, 'signal'>): Readable {
    throw new Error('Method not implemented.')
  }
  take(limit: number, options?: Pick<ArrayOptions, 'signal'>): Readable {
    throw new Error('Method not implemented.')
  }
  asIndexedPairs(options?: Pick<ArrayOptions, 'signal'>): Readable {
    throw new Error('Method not implemented.')
  }
  reduce<T>(fn: unknown, initial?: unknown, options?: unknown): Promise<T> | Promise<T> {
    throw new Error('Method not implemented.')
  }
  _destroy(error: Error | null, callback: (error?: Error | null) => void): void {
    throw new Error('Method not implemented.')
  }
  destroy(error?: Error): this {
    throw new Error('Method not implemented.')
  }
  [Symbol.asyncIterator](): NodeJS.AsyncIterator<any> {
    throw new Error('Method not implemented.')
  }
  [Symbol.asyncDispose](): Promise<void> {
    throw new Error('Method not implemented.')
  }
  writable: boolean
  writableAborted: boolean
  writableEnded: boolean
  writableFinished: boolean
  writableHighWaterMark: number
  writableLength: number
  writableObjectMode: boolean
  writableCorked: number
  writableNeedDrain: boolean
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
    throw new Error('Method not implemented.')
  }
  _writev?(
    chunks: Array<{ chunk: any; encoding: BufferEncoding }>,
    callback: (error?: Error | null) => void,
  ): void {
    throw new Error('Method not implemented.')
  }
  _final(callback: (error?: Error | null) => void): void {
    throw new Error('Method not implemented.')
  }
  write(chunk: unknown, encoding?: unknown, callback?: unknown): boolean {
    throw new Error('Method not implemented.')
  }
  setDefaultEncoding(encoding: BufferEncoding): this {
    throw new Error('Method not implemented.')
  }
  end(chunk?: unknown, encoding?: unknown, cb?: unknown): this {
    throw new Error('Method not implemented.')
  }
  cork(): void {
    throw new Error('Method not implemented.')
  }
  uncork(): void {
    throw new Error('Method not implemented.')
  }
  removeAlpha(): sharp.Sharp {
    throw new Error('Method not implemented.')
  }
  ensureAlpha(alpha?: number): sharp.Sharp {
    throw new Error('Method not implemented.')
  }

  listeners<K>(eventName: any): Array<any> {
    throw new Error('Method not implemented.')
  }
  rawListeners<K>(eventName: any): Array<any> {
    throw new Error('Method not implemented.')
  }
  listenerCount<K>(eventName: any, listener?: any): number {
    throw new Error('Method not implemented.')
  }
}

export const cloudFlareSharpImpl: SharpDependency = (
  input?:
    | ArrayBuffer
    | Buffer
    | Float32Array
    | Float64Array
    | Int8Array
    | Int16Array
    | Int32Array
    | string
    | Uint8Array
    | Uint8ClampedArray
    | Uint16Array
    | Uint32Array,
  options?: sharp.SharpOptions,
): sharp.Sharp => {
  return new CFSharpImpl(input, options)
}
