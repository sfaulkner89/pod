generate-types:
	@npx mtgen -p utils/mtgen/tsconfig.mtgen.json -o types/models.d.ts;
	@exit 0;