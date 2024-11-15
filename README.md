CREATE POLICY "Allow anyone to manage files in avatars"
  ON storage.objects
  FOR ALL
  USING (
    bucket_id = 'avatars'
  );
